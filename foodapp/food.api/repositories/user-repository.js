require('../models/user-model');
const BaseRepository = require('../bin/base/repository-base');
const md5 = require('md5');

class UserRepository {
    constructor() {
        this._base = new BaseRepository('User');
        this._projection = 'name email _id';
    }

    async isEmailExists(email) {
        return await this._base._model.findOne({ email: email }, this._projection);
    }

    async auth(email, password) {
        let _hashPassword = md5(password);
        return await this._base._model.findOne({ email: email, password: _hashPassword }, this._projection);
    }

    async create(data) {
        let createdUser = await this._base.create(data);
        return this._base._model.findById(createdUser._id, this._projection);
    }

    async update(id, data) {
        let updatedUser = await this._base.update(id,
            {
                nome: data.nome,
                email: data.email,
                photo: data.photo
            });
        return this._base._model.findById(updatedUser, this._projection);
    }

    async getAll() {
        return await this._base._model.find({}, this._projection);
    }

    async getById(id) {
        return await this._base._model.findById(id, 'nome email _id photo');
    }

    async delete(id) {
        return await this._base.delete(id);
    }

}

module.exports = UserRepository;