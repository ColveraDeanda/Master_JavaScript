const express = require('express');
const indexController = require('../controller/index.js')
const router = express.Router()

router.get('/', indexController.home)
router.get('/about', indexController.about)


module.exports = router;