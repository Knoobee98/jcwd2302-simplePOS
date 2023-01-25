const express = require('express')
const router = express.Router()

const { productsController } = require('./../controllers')

router.get('/', productsController.getAll)
router.get('/:id', productsController.getById)
router.post('/create', productsController.createProduct)
router.put('/update/:id', productsController.updateProduct)
router.delete('/delete/:id', productsController.deleteProduct)

module.exports = router