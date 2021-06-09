require('express-async-errors');
const express = require('express');
const app = express();	
const cors = require('cors');
const morgan = require('morgan');
const error = require('./middlewares/error')
const userRouter = require('./routers/userRouter');
const categoryRouter = require('./routers/categoryRouter')
const productRouter = require('./routers/productRouter.js')

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use('/api/user', userRouter);
app.use ('/api/category', categoryRouter);
app.use ('/api/product', productRouter);
//to use express-async-errors, we need a middleware
app.use(error)

module.exports = app;
