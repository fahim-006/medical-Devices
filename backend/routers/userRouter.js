"use strict";
var router = require('express').Router();
var _a = require('../controllers/userControllers'), signIn = _a.signIn, signUp = _a.signUp;
router.route('/signup')
    .post(signUp);
router.route('/signin')
    .post(signIn);
module.exports = router;
