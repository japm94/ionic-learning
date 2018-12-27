const jwt = require('jsonwebtoken');
const variables = require('../bin/config/variables');

module.exports = async (req, res, next) => {
    let token = req.body.token || req.query.query || req.headers['authorization'];

    if (token) {
        try {
            let decoded = await jwt.verify(token, variables.security.secretKey);
            console.log(decoded);
            req.userLogged = decoded;
            next();
        } catch (error) {
            res.status(401).send('Invalid Token');
            return;
        }

    } else {
        res.status(401).send({ message: 'Please, give me a Token' });
        return;
    }
};