"use strict";
var router = require('express').Router();
var _a = require('../controllers/productController'), getProduct = _a.getProduct, createProduct = _a.createProduct, getProductById = _a.getProductById, updateProductById = _a.updateProductById, getPhoto = _a.getPhoto, filterProducts = _a.filterProducts;
var admin = require('../middlewares/admin');
var authorize = require('../middlewares/authorize');
router.route('/')
    .post([authorize, admin], createProduct)
    .get(getProduct);
router.route('/:id')
    .get(getProductById)
    .put([authorize, admin], updateProductById);
router.route('/photo/:id')
    .get(getPhoto);
module.exports = router;
