'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'))

module.exports = app;
