var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
/*********************************首页路由**************************************/
var aboutRouter = require('./routes/about');
var about2Router = require('./routes/about2');
var about3Router = require('./routes/about3');
var about4Router = require('./routes/about4');
var about5Router = require('./routes/about5');
var about6Router = require('./routes/about6');
/*********************************关于华贸路由**************************************/

var serviceRouter = require('./routes/service');
/*********************************服务产品路由**************************************/
var socialResRouter = require('./routes/socialRes');
var talentsRouter = require('./routes/talents');
var employeeGrowRouter = require('./routes/employeeGrow');
var employeeNotesRouter = require('./routes/employeeNotes');
var honestBusinessRouter = require('./routes/honestBusiness');
var publicNoticeRouter = require('./routes/publicNotice');
var teamRouter = require('./routes/team');
var valueRouter = require('./routes/value');
var contactRouter= require('./routes/contact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/users', usersRouter);
/************************************首页***********************************/
app.use('/about', aboutRouter);
app.use('/about2', about2Router);
app.use('/about3', about3Router);
app.use('/about4', about4Router);
app.use('/about5', about5Router);
app.use('/about6', about6Router);
/*********************************关于华贸**************************************/
app.use('/socialRes', socialResRouter);
/*********************************社会责任**************************************/
app.use('/service', serviceRouter);
/*********************************人才战略**************************************/
app.use('/talents', talentsRouter);
app.use('/employeeGrow', employeeGrowRouter);
app.use('/employeeNotes', employeeNotesRouter);
app.use('/honestBusiness', honestBusinessRouter);
app.use('/publicNotice', publicNoticeRouter);
app.use('/team', teamRouter);
app.use('/value', valueRouter);
app.use('/contact', contactRouter);

/*********************************服务产品**************************************/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
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
