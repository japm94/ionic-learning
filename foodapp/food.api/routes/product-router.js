'user strict'

const express = require('express');
const router = express.Router();
const controller = require('../controller/product-controller');

let _ctr = new controller();

router.get('/', _ctr.get);
router.get('/:id', _ctr.getById);
router.post('/', _ctr.post);
router.put('/:id', _ctr.put);
router.delete('/:id', _ctr.delete);

module.exports = router;