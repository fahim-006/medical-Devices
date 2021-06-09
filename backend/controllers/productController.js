"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _ = require('lodash');
var formidable = require('formidable');
var fs = require('fs');
var _a = require('../models/product'), Product = _a.Product, validate = _a.validate;
var valid = require('joi').valid;
var parse = require('path').parse;
module.exports.createProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var form;
    return __generator(this, function (_a) {
        form = new formidable.IncomingForm();
        form.keepExtensions = true;
        form.parse(req, function (err, fields, files) {
            if (err)
                return res.status(400).send("Something Went Wrong!");
            var error = validate(_.pick(fields, ["name", "description", "category"])).error;
            if (error)
                return res.status(400).send(error.details[0].message);
            var product = new Product(fields);
            if (files.photo) {
                fs.readFile(files.photo.path, function (err, data) {
                    if (err)
                        return res.status(400).send("Problem in the file data!");
                    product.photo.data = data;
                    product.photo.contentType = files.photo.type;
                    product.save(function (err, result) {
                        if (err)
                            res.status(500).send("Internal Server Error!");
                        else
                            return res.status(201).send({
                                message: "Product Created Successfully",
                                data: _.pick(result, ["name", "description", "category"])
                            });
                    });
                });
            }
            else {
                return res.status(400).send("No image provided");
            }
        });
        return [2 /*return*/];
    });
}); };
//Query parameter
//api/product?order=desc$sortBy=name&limit=10
module.exports.getProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order, sortBy, limit, products;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                order = req.query.order === 'desc' ? -1 : 1;
                sortBy = req.query.sortBy ? req.query.sortBy : '_id';
                limit = req.query.limit ? parseInt(req.query.limit) : 10;
                return [4 /*yield*/, Product.find()
                        .select({ photo: 0 })
                        .sort((_a = {}, _a[sortBy] = order, _a))
                        .limit(limit)
                        .populate('category', 'name')];
            case 1:
                products = _b.sent();
                return [2 /*return*/, res.status(200).send(products)];
        }
    });
}); };
module.exports.getProductById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productId = req.params.id;
                return [4 /*yield*/, Product.findById(productId)
                        .select({ photo: 0 })
                        .populate('category', 'name')];
            case 1:
                product = _a.sent();
                if (!product)
                    res.status(404).send("Not Found!");
                return [2 /*return*/, res.status(200).send(product)];
        }
    });
}); };
module.exports.getPhoto = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productId = req.params.id;
                return [4 /*yield*/, Product.findById(productId)
                        .select({ photo: 1, _id: 0 })];
            case 1:
                product = _a.sent();
                res.set('Content-Type', product.photo.contentType);
                return [2 /*return*/, res.status(200).send(product.photo.data)];
        }
    });
}); };
//get product by Id
//collect form data
//update provided from fields
//update photos (if provided)
module.exports.updateProductById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productId, product, form;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productId = req.params.id;
                return [4 /*yield*/, Product.findById(productId)];
            case 1:
                product = _a.sent();
                form = new formidable.IncomingForm();
                form.keepExtensions = true;
                form.parse(req, function (err, fields, files) {
                    if (err)
                        return res.status(400).send("Something wrong");
                    var updatedFields = _.pick(fields, ["name", "description", "category"]);
                    _.assignIn(product, updatedFields);
                    if (files.photo) {
                        fs.readFile(files.photo.path, function (err, data) {
                            if (err)
                                return res.status(400).send("Something wrong!");
                            product.photo.data = data;
                            product.photo.contentType = files.photo.type;
                            product.save(function (err, result) {
                                if (err)
                                    return res.status(500).send("Something failed!");
                                else
                                    return res.status(200).send({
                                        message: "product updated successfully!!"
                                    });
                            });
                        });
                    }
                    else {
                        product.save(function (err, result) {
                            if (err)
                                return res.status(500).send("Something failed!");
                            else
                                return res.status(200).send({
                                    message: "product updated successfully!!"
                                });
                        });
                    }
                });
                return [2 /*return*/];
        }
    });
}); };
//defining how the body will be shown
module.exports.filterProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var order, sortBy, limit, skip, args, products;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                order = req.body.order === 'desc' ? -1 : 1;
                sortBy = req.body.sortBy ? req.body.sortBy : '_id';
                limit = req.body.limit ? parseInt(req.body.limit) : 10;
                skip = parseInt(req.body.skip);
                args = {};
                return [4 /*yield*/, Product.find(args)
                        .select({ photo: 0 })
                        .populate('category', 'name')
                        .sort((_a = {}, _a[sortBy] = order, _a))
                        .skip(skip)
                        .limit(limit)];
            case 1:
                products = _b.sent();
                return [2 /*return*/, res.status(200).send(products)];
        }
    });
}); };
