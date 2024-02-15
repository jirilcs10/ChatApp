const express = require('express');

const userController = require('../controllers/user');
const authController = require('../middleware/auth')
const router = express.Router();

router.post('/user/signup', userController.signUp);
router.post('/user/login', userController.userLogin);

router.post('/user/send',authController.authenticate,userController.sendMessage);
module.exports = router;