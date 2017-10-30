'use strict';

// modules =================================================
const express = require('express');
const bodyParser = require('body-parser');

// const api = require('./server/routes');
// const db = require('./server/models');

// create the express app object
const app = express();

// set our port
const port = process.env.PORT || 3000;

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));
// set the modules static files location
app.use('/vendors', express.static(__dirname + '/node_modules'));

// routes ==================================================

// configure global error handler
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send({
    "Error": err.stack
  });
});

// configure our routes
// app.use('/messages', api(app));

// start app ===============================================
// startup our app
app.listen(port, () => {
  // shoutout to the user                     
  console.log(`Server listening on port ${port}`);
});

// expose app           
exports = module.exports = app;