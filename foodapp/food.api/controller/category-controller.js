'user strict'

const mongoose = require('mongoose');
const category = mongoose.model('Category');

function categoryController() {

}

categoryController.prototype.get = async (req, res) => {
    return category.find();
};

categoryController.prototype.getById = async (req, res) => {
    return category.findById(req.params.id);
};

categoryController.prototype.post = async (req, res) => {
    let post = new category(req.body);
    return post.save();
};

categoryController.prototype.put = async (req, res) => {
    await category.findByIdAndUpdate(req.params.id, { $set: req.body });
    return category.findById(req.params.id);
};

categoryController.prototype.delete = async (req, res) => {
    return category.findByIdAndRemove(req.params.id);

};

module.exports = categoryController;