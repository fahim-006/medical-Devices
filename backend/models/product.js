"use strict";
var _a = require('mongoose'), Schema = _a.Schema, model = _a.model;
var Joi = require('joi');
module.exports.Product = model('Product', Schema({
    name: String,
    description: String,
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        require: true
    },
    photo: {
        data: Buffer,
        contentType: String,
    }
}, { timestamps: true }));
module.exports.validate = function (product) {
    var schema = Joi.object({
        name: Joi.string().min(3).max(255).required(),
        description: Joi.string().max(2000).required(),
        category: Joi.string().required(),
    });
    return schema.validate(product);
};
