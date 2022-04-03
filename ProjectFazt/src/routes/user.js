const express = require('express');
const userController = require('../controller/user.js')
const router = express.Router();


router.get('/signin', userController.signIn);
router.get('/signup', userController.signup);

module.exports = router;