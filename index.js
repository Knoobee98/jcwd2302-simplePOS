const express = require('express');
const app = express();
const port = 5000;

app.use(express.json())

app.get('/', () => {
    console.log('Hello World!');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

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