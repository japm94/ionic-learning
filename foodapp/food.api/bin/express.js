const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/config/variables');

//ROUTERS
const categoryRouter = require('../routes/category-router');
const productRouter = require('../routes/product-router');
const userRouter = require('../routes/user-router');

//CREATING API (SERVER WEB)
const app = express();

// SETTINGS JSON PARSE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// SETTINGS TO CONNECT TO DB
mongoose.set('useCreateIndex', true)
mongoose.connect(variables.db.connection, { useNewUrlParser: true });

//ROUTERS SETTINGS
app.use('/api/category', categoryRouter);
app.use('/api/product', productRouter);
app.use('/api/user', userRouter);

// EXPORT API
module.exports = app;