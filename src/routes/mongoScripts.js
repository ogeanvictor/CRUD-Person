'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controllers/mongoScripts');

router.get('/cleanCpfInvalids', controller.cleanCpfInvalids);

module.exports = router