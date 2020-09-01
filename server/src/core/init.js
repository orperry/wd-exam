const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// start express app
const app = express();

// some require configuration
app.use(bodyParser.json());
app.use(cookieParser());

// export
module.exports = app;
