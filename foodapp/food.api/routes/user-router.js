'user strict'

const express = require('express');
const router = express.Router();
const Controller = require('../controller/user-controller');

let _ctr = new Controller();

router.get('/', _ctr.get);
router.get('/:id', _ctr.getById);
router.post('/', _ctr.post);
router.put('/:id', _ctr.put);
router.delete('/:id', _ctr.delete);

module.exports = router;