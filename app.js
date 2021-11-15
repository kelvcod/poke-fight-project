require("dotenv").config();
const cors = require("cors")
require("./database/client");
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const fighterRouter = require('./routes/fighter');
const usersRouter = require('./routes/users');

const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  
 


const port = process.env.PORT || 3001
const app = express();


app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', fighterRouter);
app.use('/users', usersRouter);






module.exports = app;
