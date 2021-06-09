"use strict";
exports.__esModule = true;
exports.getCategories = exports.createProduct = exports.createCategory = void 0;
var config_1 = require("../utils/config");
var axios_1 = require("axios");
var createCategory = function (token, data) {
    return axios_1["default"].post(config_1.API + "/category", data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });
};
exports.createCategory = createCategory;
var createProduct = function (token, data) {
    return axios_1["default"].post(config_1.API + "/product", data, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });
};
exports.createProduct = createProduct;
var getCategories = function () {
    return axios_1["default"].get(config_1.API + "/category");
};
exports.getCategories = getCategories;
