'user strict'

const express = require('express');
const router = express.Router();
const Controller = require('../controller/category-controller');
const auth = require('../middlewares/authentication');

let _ctr = new Controller();

router.use(auth);

router.get('/', _ctr.get);
router.get('/:id', _ctr.getById);
router.post('/', _ctr.post);
router.put('/:id', _ctr.put);
router.delete('/:id', _ctr.delete);

module.exports = router;