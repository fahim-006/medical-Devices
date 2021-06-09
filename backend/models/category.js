"use strict";
var _a = require('mongoose'), Schema = _a.Schema, model = _a.model;
var Joi = require('joi');
module.exports.Category = model('Category', Schema({
    name: {
        type: String,
        unique: true
    }
}, { timestamps: true }));
module.exports.validate = function (category) {
    var schema = Joi.object({
        name: Joi.string().min(3).max(50).required()
    });
    return schema.validate(category);
};
