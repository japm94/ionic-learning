'use strict'

const mongoose = require('mongoose');

class RepositoryBase {

    constructor(model) {
        this._model = mongoose.model(model);
    }

    async create(data) {
        let model = new this._model(date);
        return await model.save();
    }

    async update(id, data) {
        await this._model.findByIdAndUpdate(id, { $set: data });
        return await this._model.findById(id);
    }

    async getAll() {
        return await this._model.find();
    }

    async getById(id) {
        return await this._model.findById(id);
    }

    async delete(id) {
        return await this._model.findByIdAndRemove(id);
    }
}

module.exports = RepositoryBase;