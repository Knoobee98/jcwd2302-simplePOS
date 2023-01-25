const {sequelize} = require('./../models')
const {Op} = require('sequelize')

const db = require('./../models/index')
const products = db.products
const users =  db.users
const transactions = db.transactions

module.exports = {
    createTransaction: async(req, res) => {
        let { productsName, productsPrice } = req.body
        let { id } = req.params

        try {
            let findUserId = await users.findOne({
                where: {
                    id
                }
            })

            await transactions.create({productsName: productsName, productsPrice: productsPrice})

            res.status(201).send({
                isError: false,
                message: 'Transaction created successfully',
                data: null,
            })

        } catch (error) {
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null,
            })
        }
    }
}

