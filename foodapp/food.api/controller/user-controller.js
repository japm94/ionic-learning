'user strict';

const repository = require('../repositories/user-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');

// Dependencies to generate TOKEN
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const variables = require('../bin/config/variables');

const _repo = new repository();


function userController() {

}

userController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

userController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

userController.prototype.post = async (req, res) => {
    const _validationContract = new validation();

    _validationContract.isRequired(req.body.name, 'Enter your name');
    _validationContract.isRequired(req.body.email, 'Enter your e-mail');
    _validationContract.isEmail(req.body.email, 'Invalid e-mail');
    _validationContract.isRequired(req.body.password, 'Enter your password');
    _validationContract.isRequired(req.body.passwordConfirmation, 'Confirmation password is required');
    _validationContract.isTrue(req.body.password != req.body.passwordConfirmation, 'Password and Confirmation password are different');

    if (req.body.email) {
        let userEmailExists = await _repo.isEmailExists(req.body.email);
        if (userEmailExists) {
            _validationContract.isTrue((userEmailExists.nome != undefined), `Email ${req.body.email} already registred`);
        }
    }

    if(req.body.password){
        req.body.password = md5(req.body.password);
    }
    ctrlBase.post(_repo, _validationContract, req, res);
};

userController.prototype.put = async (req, res) => {
    const _validationContract = new validation();

    _validationContract.isRequired(req.params.id, 'Enter an existing id');
    _validationContract.isRequired(req.body.email, 'Enter your e-mail');
    _validationContract.isEmail(req.body.email, 'Invalid e-mail');
    _validationContract.isRequired(req.body.password, 'Invalid password');
    _validationContract.isRequired(req.body.passwordConfirmation, 'Confirmation password is required');
    _validationContract.isTrue(req.body.password != req.body.passwordConfirmation, 'Password and Confirmation password are different');

    let userEmailExists = await _repo.isEmailExists(req.body.email);
    if (userEmailExists) {
        _validationContract.isTrue(
            (userEmailExists.nome != undefined) &&
            (userEmailExists._id != req.params.id),
            `Email ${req.body.email} already registred`);
    }

    ctrlBase.put(_repo, _validationContract, req, res);
};

userController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

userController.prototype.authenticate = async (req, res) => {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.email, 'Enter your email');
    _validationContract.isEmail(req.body.email, 'Invalid e-mail');
    _validationContract.isRequired(req.body.password, 'Enter your password');

    if (!_validationContract.isValid()) {
        res.status(400).send({ message: 'Impossible to complete login', validation: _validationContract.errors() });
        return;
    }

    let userFound = await _repo.auth(req.body.email, req.body.password);

    if (userFound) {
        res.status(200).send({
            user: userFound,
            token: jwt.sign({ user: userFound }, variables.security.secretKey)
        });
    } else {
        res.status(404).send({ message: 'Informed e-mail and password are invalid!' });
    }
};

module.exports = userController