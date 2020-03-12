const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

//Setup
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//DB connection
mongoose.connect('mongodb://localhost:27017/url', { useNewUrlParser: true }).then(
    () => {
        console.log('db connected');
    }
).catch( err => {
    console.log(`Cant connect to db: ${err}`);
})

//Routes
app.use('/convert', require('./convert'));

//Port & listen
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Oi lads on port ${PORT}`);
})