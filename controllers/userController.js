const {sequelize} = require('./../models')
const {Op} = require('sequelize')

const {v4: uuidv4} = require('uuid')

const db = require('./../models/index')
const users = db.users

const {hashPassword, hashMatch} = require('./../lib/hashPassword')

const {generateToken, validateToken} = require('./../lib/token')




module.exports = {
    login: async(req, res) => {
        const {usernameEmail, password} = req.body;

        try {
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
            
            //check password
            let checkPassword = hashPassword(password, checkUser.password)
    
            if(checkPassword === false) return res.status(404).send({
                isError: true,
                message: 'password is wrong',
                data: null
            })
    
           //generate token
           const token = generateToken({
            id: checkUser.id,
            username: checkUser.username,
            role: checkUser.role
           })
    
            res.status(201).send({
                isError: false,
                message: 'login success',
                data: null
            })

        } catch (error) {
            res.status(404).send({
                isError: true,
                message: error.message,
                data: null
            })
        }
    },

    keepLogin: (req, res) => {
        try {
            res.status(201).send({
                isError: false,
                message: 'keep login success',
                data: null
            })
        } catch (error) {
            
        }
    },

    addUser: async(req, res) => {
        const {username, email, password, role} = req.body
        const t = await sequelize.transaction()

        try {
            if(!username.length || !email.length || !password.length || !role.length) return res.status(404).send({
                isError: true,
                message: 'username, email, password, role is required',
                data: null
            })
             
            await users.create({id: uuidv4() ,username, email, password: await hashPassword(password), role}, {transaction: t})

            await t.commit()
            res.status(201).send({
                isError: false,
                message: 'user created',
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

        
    }
}