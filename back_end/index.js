const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db');
let emailController = require('./controller/emailController');

let port = 3000;
let app = express();
app.use(bodyParser.json());
app.use(cors('http://localhost:3000/email'));


app.listen(port, () => {console.log(`Server in Running on port: ${port}`);
})

app.use('/email', emailController);