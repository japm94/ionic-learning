'user strict'

const express = require('express');
const router = express.Router();
const Controller = require('../controller/user-controller');
const auth = require('../middlewares/authentication');

let _ctr = new Controller();

router.post('/oauth/token', _ctr.authenticate);
router.get('/', auth,_ctr.get);
router.get('/:id', auth, _ctr.getById);
router.post('/', _ctr.post);
router.put('/:id', auth, _ctr.put);
router.delete('/:id', auth, _ctr.delete);

module.exports = router;