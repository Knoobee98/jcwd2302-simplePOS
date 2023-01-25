const express = require('express');
const Router = express.Router();

const userController = require('./../controllers/userController')

const verifyToken = require('./../middleware/verifyToken')

Router.post('/login',  userController.login)
Router.post('/addCashier', userController.addUser)
// Router.get('/keepLogin', verifyToken, userController.keepLogin)

module.exports = Router;