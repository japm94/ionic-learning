const mongoose = require('mongoose');
const schema = mongoose.Schema;

const categoryModel = new schema({
    title: { trim: true, index: true, required: true, type: String },
    description: { type: String },
    photo: { type: String, required: true },
    active: { type: Boolean },
    createdDate: { type: Date, default: Date.now }
}, { versionKey: false });

categoryModel.pre('save', next => {
    let now = new Date();
    if (!this.createdDate){
        this.createdDate = now;
    }
    next();
});

module.exports = mongoose.model('Category', categoryModel);