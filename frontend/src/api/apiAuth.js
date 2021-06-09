"use strict";
exports.__esModule = true;
exports.login = exports.register = void 0;
var axios_1 = require("axios");
var config_1 = require("../utils/config");
var register = function (user) {
    return axios_1["default"].post(config_1.API + "/user/signup", user, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
exports.register = register;
var login = function (user) {
    return axios_1["default"].post(config_1.API + "/user/signin", user, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
exports.login = login;
