
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = new Schema({
    name: { trim: true, index: true, required: true, type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String},
    active: { type: Boolean },
    createdDate: { type: Date, default: Date.now }

}, { versionKey: false });

userModel.pre('save', next => {
    let now = new Date();
    if (!this.createdDate) {
        this.createdDate = now;
    }
    next();
});

module.exports = mongoose.model('User', userModel);