const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.get('/get-users', userController.getUsers);


module.exports = router;