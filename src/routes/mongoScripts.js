'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/mongoScripts');

router.get('/cleanCpfInvalids', controller.cleanCpfInvalids);
router.get('/formatedNumberPhone', controller.formatedNumberPhone);

module.exports = router