'user strict'

require('../models/product-model');
const mongoose =  require ('mongoose');
const product = mongoose.model('Product');

function productController(){

}

productController.prototype.get = async (req, res) =>{
    res.status(200).send('It`s working');
};

productController.prototype.getById = async (req, res) =>{ 
    res.status(200).send(`O ID passado foi ${req.params.id}`);
};

productController.prototype.post = async (req, res) =>{ 

};

productController.prototype.put = async (req, res) =>{ 

};

productController.prototype.delete = async (req, res) =>{ 

};

module.exports = productController;