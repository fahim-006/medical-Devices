"use strict";
exports.__esModule = true;
exports.getCategories = exports.getProductDetails = exports.getProducts = void 0;
var config_1 = require("../utils/config");
var axios_1 = require("axios");
var getProducts = function (sortBy, order, limit) {
    return axios_1["default"].get(config_1.API + "/product?sortBy=" + sortBy + "&order=" + order + "&limit=" + limit);
};
exports.getProducts = getProducts;
var getProductDetails = function (id) {
    return axios_1["default"].get(config_1.API + "/product/" + id);
};
exports.getProductDetails = getProductDetails;
var getCategories = function () {
    return axios_1["default"].get(config_1.API + "/category");
};
exports.getCategories = getCategories;
