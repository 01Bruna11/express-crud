//ES6
import express from "express"
import usersRouter from "./routes/users"
import professoresRouter from "./routes/professores"

//ES5
/*var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');*/

var app = express();

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
})

app.use('/users', usersRouter);
app.use('/professor', professoresRouter);

//ES5
//module.exports = app;
app.listen(3001)
//ES6
export default app