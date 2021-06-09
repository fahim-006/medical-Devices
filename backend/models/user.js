"use strict";
var _a = require('mongoose'), Schema = _a.Schema, model = _a.model;
var Joi = require('joi');
var jwt = require('jsonwebtoken');
var userSchema = Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true,
    },
    password: {
        type: String,
        requierd: true,
        minlength: 5,
        maxlength: 1024
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
}, { timestamps: true }); //new doc submission time
userSchema.methods.generateJWT = function () {
    var token = jwt.sign({
        _id: this._id,
        email: this.email,
        role: this.role,
        name: this.name
    }, process.env.JWT_SECRET_KEY, { expiresIn: "7d" });
    return token;
};
var user;
var validateUser = function (user) {
    var schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        email: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required(),
    });
    return schema.validate(user);
};
module.exports.User = model('User', userSchema);
module.exports.validate = validateUser;
