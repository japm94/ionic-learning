exports.get = async (repository, req, res) => {
    try {
        let data = await repository.getAll();
        res.status(200).send(data);
    } catch (error) {
        console.log('Error during GET, caused by: ', err);
        res.status(500).send({ message: 'Error during processing', error: err });
    }
};

exports.getById = async (repository, req, res) => {
    try {
        let id = req.params.id;
        if (id) {
            let data = await repository.getById(id);
            res.status(200).send(data);
        } else {
            res.status(400).send('There is no such ID');
        }

    } catch (error) {
        console.log('Error during GET, caused by: ', err);
        res.status(500).send({ message: 'Processing ERROR', error: err });
    }
};

exports.post = async (repository, validationContract, req, res) => {
    try {
        let data = req.body;
        if (!validationContract.isValid()) {
            res.status(400).send({
                message: 'There is invalid data in your request',
                validation: validationContract.errors()
            }).end();
            return;
        }
        let result = await repository.create(data);
        res.status(201).send(result);
    } catch (error) {
        console.log('Error during POST', err);
        res.status(500).send({ message: 'Processing ERROR', error: err });
    }
};

exports.put = async (repository, validationContract, req, res) => {
    try {
        let data = req.body;
        if (!validationContract.isValid()) {
            res.status(400).send({
                message: 'There is invalid data in your request',
                validation: validationContract.errors()
            }).end();
            return;
        }
        let result = await repository.update(req.params.id, data);
        res.status(202).send(result);
    } catch (error) {
        console.log('Error during PUT', err);
        res.status(500).send({ message: 'Processing ERROR', error: err });
    }
};

exports.delete = async (repository, req, res) => {
    try {
        let id = req.params.id;
        if (id) {
            let data = await repository.delete(id);
            res.status(204).send({ message: 'Record deleted successfully' });
        } else {
            res.status(400).send('There is no such ID');
        }
    } catch (error) {
        console.log('Error during DELETE, caused by: ', err);
        res.status(500).send({ message: 'Processing ERROR', error: err });
    }
};