const {sequelize} = require('./../models')
const {Op} = require('sequelize')

const {v4: uuidv4} = require('uuid')

const db = require('./../models/index')
const users = db.users



module.exports = {
    login: async(req, res) => {
        const {usernameEmail, password} = req.body;
        
        if(!usernameEmail.length || !password.length) return res.status(404).send({
            isError: true,
            message: 'username or password is empty',
            data: null
        })

        let checkUser = await users.findOne({
            where: {
                [Op.or]: [
                    {username: usernameEmail},
                    {email: usernameEmail}
                ]
            }
        })

        if(!checkUser) return res.status(404).send({
            isError: true,
            message: 'username or password is wrong',
            data: null
        })

        let checkPassword = await users.findOne({
            where: {
                password
            }
        })

        if(!checkPassword) return res.status(404).send({
            isError: true,
            message: 'password is wrong',
            data: null
        })

        res.status(201).send({
            isError: false,
            message: 'login success',
            data: null
        })

    },

    addUser: (req, res) => {
        const {username, email, password, role} = req.body

        if(!username.length || !email.length || !password.length || !role.length) return res.status(404).send({
            isError: true,
            message: 'username, email, password, role is required',
            data: null
        })
    }
}