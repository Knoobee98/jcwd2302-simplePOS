const express = require('express')
const router = express.Router()

const { transactionsController } = require('./../controllers')

router.post('/create', transactionsController.createTransaction)

module.exports = router