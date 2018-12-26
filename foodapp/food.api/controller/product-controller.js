'user strict'

require('../models/product-model');
const mongoose = require('mongoose');
const product = mongoose.model('Product');

function productController() {

}

productController.prototype.get = async (req, res) => {
    let list = await product.find();
    res.status(200).send(list);
};

productController.prototype.getById = async (req, res) => {
    let result = await product.findById(req.params.id);
    res.status(200).send(result);
};

productController.prototype.post = async (req, res) => {
    let post = new product(req.body);
    let result = await post.save();
    res.status(201).send(result);
};

productController.prototype.put = async (req, res) => {
    await product.findByIdAndUpdate(req.params.id, { $set: req.body });
    let result = product.findById(req.params.id);
    res.status(202).send(result);
};

productController.prototype.delete = async (req, res) => {
    await product.findByIdAndRemove(req.params.id);
    res.status(204).send('Deleted');
};

module.exports = productController;