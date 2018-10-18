const bodyParser = require('body-parser');
const pagination = require('express-pagination');
const expressMongoDB = require('express-mongo-db');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var db = require('./database');


var app = express();
app.use(expressMongoDB());



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', db);


//create schema and connet to mongoDb;
var mongoose = require ('mongoose');
var userSchema= new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim:true,
    },
    rentalname:{
        type: String,
        required:true,
        trim:true
    },
    password:{
        type:password,
        required:true
    }
});

var rentaldb = mongoose.model('rental', userSchema);
//var user = mongoose.model('user', userSchema);
module.exports = rentaldb;
//module.exports = user;

if(req.bodyParser.email &&
    req.bodyParser.rentalname &&
    req.bodyParser.password){

        var userRental = {
            email:req.bodyParser.email,
            rentalname : req.bodyParser.rentalname,
            password : req.bodyParser.password
        }

        rentaldb.create(userRental,function(err, user){
            if (err) {
                return next(err)
            } else{
                return res.redirect('/');
            }
        })
    }




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

