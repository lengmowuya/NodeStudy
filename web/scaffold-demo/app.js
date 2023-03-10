// 1.引入所有的包依赖文件
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// 2.引入路由文件
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// 3.创建web服务器
const app = express();

// 4.设置模板引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 5.使用各种中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 6.配置路由
app.use('/', indexRouter);
app.use('/users', usersRouter);

// 7.配置404错误
app.use(function(req, res, next) {
  next(createError(404));
});

// 8.统一处理错误
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
