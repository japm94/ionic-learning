'user strict'

require('../models/category-model');
const mongoose = require('mongoose');
const category = mongoose.model('Category');
const repository = require('../repositories/category-repository');

function categoryController() {

}

categoryController.prototype.get = async (req, res) => {
    let list = await category.find();
    res.status(200).send(list);
};

categoryController.prototype.getById = async (req, res) => {
    let result = await category.findById(req.params.id);
    res.status(200).send(result);
};

categoryController.prototype.post = async (req, res) => {
    let post = new category(req.body);
    let result = await post.save();
    res.status(201).send(result);
};

categoryController.prototype.put = async (req, res) => {
    await category.findByIdAndUpdate(req.params.id, { $set: req.body });
    let result = category.findById(req.params.id);
    res.status(202).send(result);
};

categoryController.prototype.delete = async (req, res) => {
    await category.findByIdAndRemove(req.params.id);
    res.status(204).send('Deleted');

};

module.exports = categoryController;