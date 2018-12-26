'user strict'

require('../models/category-model');
const repository = require('../repositories/category-repository');

function categoryController() {

}

categoryController.prototype.get = async (req, res) => {
    let list = await new repository().getAll();
    res.status(200).send(list);
};

categoryController.prototype.getById = async (req, res) => {
    let result = await category.findById(req.params.id);
    res.status(200).send(result);
};

categoryController.prototype.post = async (req, res) => {
    let result = await new repository().create(req.body);
    res.status(201).send(result);
};

categoryController.prototype.put = async (req, res) => {
    let result = await new repository().update(req.params.id, req.body);
    res.status(202).send(result);
};

categoryController.prototype.delete = async (req, res) => {
    let result = new repository().delete(req.params.id);
    res.status(204).send(result);

};

module.exports = categoryController;