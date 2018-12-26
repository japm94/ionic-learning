'user strict'

const repository = require('../repositories/product-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');

const _repo = new repository();

function productController() {

}

productController.prototype.get = async (req, res) => {
    ctrlBase.get(_repo, req, res);
};

productController.prototype.getById = async (req, res) => {
    ctrlBase.getById(_repo, req, res);
};

productController.prototype.post = async (req, res) => {
    const _validationContract = new validation();

    _validationContract.isRequired(req.body.name, 'Name is required');
    _validationContract.isRequired(req.body.description, 'Description is required');
    _validationContract.isRequired(req.body.price, 'Price is required');
    _validationContract.isRequired(req.body.photo, 'Photo is required');
    _validationContract.isRequired(req.body.active, 'Active is required');

    ctrlBase.post(_repo, _validationContract, req, res);
};

productController.prototype.put = async (req, res) => {
    const _validationContract = new validation();

    _validationContract.isRequired(req.params.id, 'Enter an existing id');
    _validationContract.isRequired(req.body.name, 'Name is required');
    _validationContract.isRequired(req.body.description, 'Description is required');
    _validationContract.isRequired(req.body.price, 'Price is required');
    _validationContract.isRequired(req.body.photo, 'Photo is required');
    _validationContract.isRequired(req.body.active, 'Active is required');

    ctrlBase.post(_repo, _validationContract, req, res);
};

productController.prototype.delete = async (req, res) => {
    ctrlBase.delete(_repo, req, res);
};

module.exports = productController;