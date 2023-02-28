'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/person');

router.post('/', controller.save);
router.get('/', controller.findAll);
router.put('/', controller.update);
router.get('/:id', controller.findById);
router.delete('/:id', controller.delete);

module.exports = router;