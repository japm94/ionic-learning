'user strict'

const mongoose = require('mongoose');
const category = mongoose.model('Category');

function categoryController() {

}

categoryController.prototype.get = async (req, res) => {
    res.status(200).send('It`s working');
};

categoryController.prototype.getById = async (req, res) => {
    res.status(200).send(`O ID passado foi ${req.params.id}`);
};

categoryController.prototype.post = async (req, res) => {
    
};

categoryController.prototype.put = async (req, res) => {

};

categoryController.prototype.delete = async (req, res) => {

};

module.exports = categoryController;