var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config/index');

mongoose.connect(config.MONGODB_URI,
{useNewUrlParser: true, useUnifiedTopology: true})

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users');
var companyRouter = require('./routes/company');
const staffRouter = require('./routes/staff')
const shopRouter = require('./routes/shop');

const errorHandle = require('./middleware/errorHandle')

var app = express();

app.use(logger('dev'));
app.use(express.json({
    limit: '50mb'
}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter)
app.use('/user', userRouter)
app.use('/company', companyRouter)
app.use('/staff', staffRouter)
app.use('/shop', shopRouter)


app.use(errorHandle)
module.exports = app;


