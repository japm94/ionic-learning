const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productModel = new Schema({
    name: { type: String, required: true, trim: true, index: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    photo: { type: String, required: true },
    active: { type: Boolean, required: true },
    createdDate: { type: Date, default: Date.now }

}, { versionKey: false });

productModel.pre('save', next => {
    let now = new Date();
    if (!this.createdDate) {
        this.createdDate = now;
    }
    next();
});

module.exports = mongoose.model('Product', productModel);