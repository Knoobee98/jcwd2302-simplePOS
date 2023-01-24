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