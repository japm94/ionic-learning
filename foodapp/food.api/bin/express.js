const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const variables = require('../bin/config/variables');

//ROUTERS
const categoryRouter = require('../routes/category-router');
const productRouter = require('../routes/product-router');

//CREATING API (SERVER WEB)
const app = express();

// SETTINGS JSON PARSE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// SETTINGS TO CONNECT TO DB
mongoose.connect(variables.db.connection);

//ROUTERS SETTINGS
app.use('/api/category', categoryRouter);
app.use('/api/product', productRouter);

module.exports = app;