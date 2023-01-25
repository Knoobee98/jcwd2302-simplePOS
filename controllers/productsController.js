const {sequelize} = require('./../models')
const {Op} = require('sequelize')

const db = require('./../models/index')
const products = db.products

module.exports = {
    getAll: async(req, res) => {

        try {
           let getAllProducts = await products.findAll()

            res.status(201).send({
                isError: false,
                message: 'Success get all products',
                data: getAllProducts
            })
        } catch (error) {
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }

    },

    getById: async(req, res) => {
        let { id } = req.params

        try {
            let getproductId = products.getOne({
                where: {
                    id: id
                }
            })

            res.status(201).send({
                isError: false,
                message: 'Success get product by id',
                data: getproductId
            })

        } catch (error) {
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }

    },

    createProduct: async(req, res) => {
        const { name, prices, stock, discount, category } = req.body
        const t = await sequelize.transaction()

        try {
            await products.create({name: name, prices: prices, stock: stock, discount: discount, category: category}, {transaction: t});

            await t.commit()
            res.status(201).send({
                isError: false,
                message: 'Success create product',
                data: null
            })

        } catch (error) {
            await t.rollback()
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }

    },

    updateProduct: async(req, res) => {
        let { id } = req.params
        const { name, price, stock, discount } = req.body
        const t = await sequelize.transaction()

        try {
            let findId = await products.findOne({
                where: {
                    id: id
                }
            })

            if(!findId) return res.status(404).send({
                isError: true,
                message: 'Product not found',
                data: null
            })

            products.update({
                name: name,
                price: price,
                stock: stock,
                discount: discount
            }, {transaction: t})

            await t.commit()
            res.status(201).send({
                isError: false,
                message: 'Success update product',
                data: null
            })

        } catch (error) {
            await t.rollback()
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    },

    deleteProduct: async(req, res) => {
        let {id} = req.params.id

        try {
            let findId = await products.findOne({
                where: {
                    id
                }
            })

            if(!findId) return res.status(404).send({
                isError: true,
                message: 'id not found',
                data: null
            })

            await products.destroy({
                where: {
                    id: id
                }
            })

            res.status(201).send({
                isError: false,
                message: 'Success delete product',
                data: null
            })

        } catch (error) {
            res.status(500).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    },

    filterProducts: async(req, res) => {

    },

    

    
}