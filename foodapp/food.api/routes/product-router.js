'user strict'

const express = require('express');
const router = express.Router();
const controller = require('../controller/product-controller');
const auth = require('../middlewares/authentication');

let _ctr = new controller();

router.use(auth);

router.get('/', auth ,_ctr.get);
router.get('/:id', _ctr.getById);
router.post('/', _ctr.post);
router.put('/:id', _ctr.put);
router.delete('/:id', _ctr.delete);

module.exports = router;