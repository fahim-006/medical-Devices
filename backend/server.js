"use strict";
require('dotenv/config');
var app = require('./app');
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(function () { return console.log("connected"); })
    .catch(function () { return console.log("MongoDB connection failed"); });
var port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log("Listening on port " + port + "...");
});
