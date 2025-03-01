var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var pariwisataRouter = require('./routes/pariwisata');
var mahasiswaRouter = require('./routes/namamahasiswa');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const mongoose = require("mongoose");

var app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pariwisataRouter);
app.use('/mahasiswa', mahasiswaRouter)
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
mongoose.connect(
  "mongodb://localhost:27017/dbPariwisata"
).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  // console.error('App starting error:', err.stack);
  console.log("Connection Failed");
});

module.exports = app;
