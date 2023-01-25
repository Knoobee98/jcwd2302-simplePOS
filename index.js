const express = require('express');
const app = express();
// const port = 5000;

const dotenv = require('dotenv')
dotenv.config()

app.use(express.json())

app.get('/', () => {
    console.log('Hello World!');
})

//import router
const { userRouter, productsRouter } = require('./routers')
app.use('/user', userRouter)
app.use('/products', productsRouter)


// sequelize synchronous
const Sequelize = require('sequelize')
const Models = require('./models')

Models.sequelize.sync({
    force: false,
    alter: true,
    logging: console.log
}).then(function () {
    console.log('database is synchronized')
}).catch(function (error){
    console.log(error, 'something went wrong with the database')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})