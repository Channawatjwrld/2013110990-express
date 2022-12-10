var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://kengzero:256A9A9B@2013110990-channawat.nqlkntm.mongodb.net/restfulapi?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var companyRouter = require('./routes/company');
const staffRouter = require('./routes/staff')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/company', companyRouter)
app.use('/staff', staffRouter)

module.exports = app;
