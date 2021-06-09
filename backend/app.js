"use strict";
require('express-async-errors');
var express = require('express');
var app = express();
var cors = require('cors');
var morgan = require('morgan');
var error = require('./middlewares/error');
var userRouter = require('./routers/userRouter');
var categoryRouter = require('./routers/categoryRouter');
var productRouter = require('./routers/productRouter.js');
app.use(express.json());
app.use(cors());
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use('/api/user', userRouter);
app.use('/api/category', categoryRouter);
app.use('/api/product', productRouter);
//to use express-async-errors, we need a middleware
app.use(error);
module.exports = app;
