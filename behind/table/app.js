var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var cityRouter = require('./routes/city');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// use()需要注意应用顺序
app.use(logger('dev'));
app.use(express.json()); // 解析参数 {name:"123"}
app.use(express.urlencoded({ extended: false })); // 配置解析post参数  username=11&passowr=1234
app.use(cookieParser());
app.use('/static',express.static(path.join(__dirname, 'public'))); 

// 应用级别中间件
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/city', cityRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
