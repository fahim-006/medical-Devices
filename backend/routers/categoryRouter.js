"use strict";
var router = require('express').Router();
var _a = require('../controllers/categoryControllers'), createCategory = _a.createCategory, getCategories = _a.getCategories;
var authorize = require('../middlewares/authorize');
var admin = require('../middlewares/admin');
router.route('/')
    .post([authorize, admin], createCategory)
    .get(getCategories);
module.exports = router;
