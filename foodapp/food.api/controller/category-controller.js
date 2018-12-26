'user strict'

const repository = require('../repositories/category-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');

const _repo = new repository();

function categoryController() {

}

categoryController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

categoryController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

categoryController.prototype.post = async (req, res) => {
    const _validationContract = new validation();

    _validationContract.isRequired(req.body.title, 'Title is required');
    _validationContract.isRequired(req.body.photo, 'Photo is required');

    ctrlBase.post(_repo, _validationContract, req, res);
};

categoryController.prototype.put = async (req, res) => { 
    const _validationContract = new validation();

    _validationContract.isRequired(req.params.id, 'Enter an existing id');
    _validationContract.isRequired(req.body.title, 'Title is required');
    _validationContract.isRequired(req.body.photo, 'Photo is required');

    ctrlBase.put(_repo, _validationContract, req, res);
};

categoryController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);

};

module.exports = categoryController;