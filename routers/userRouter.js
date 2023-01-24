const express = require('express');
const router = express.Router();

const userController = require('./../controllers/userController')

const verifyToken = require('./../middleware/verifyToken')

router.post('/login',  userController.login)
router.post('/addCashier', userController.addUser)
router.get('/keepLogin', verifyToken, userController.keepLogin)

module.exports = router;