'user strict';

const repository = require('../repositories/user-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');
const md5 = require('md5');

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
    _validationContract.isRequired(req.body.password, 'Invalid password');
    _validationContract.isRequired(req.body.passwordConfirmation, 'Confirmation password is required');
    _validationContract.isTrue(req.body.password != req.body.passwordConfirmation, 'Password and Confirmation password are different');

    let userEmailExists = await _repo.isEmailExists(req.body.email);
    if (userEmailExists) {
        _validationContract.isTrue((userEmailExists.nome != undefined), `Email ${req.body.email} already registred`);
    }

    req.body.password = md5(req.body.password);

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

module.exports = userController;