'use strict';
const mysql = require('mysql');
const express = require('express');
const app = express();

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'lmc8ixkebgaq22lo.chr7pe7iynqr.eu-west-1.rds.amazonaws.com',
  user     : 'ots7phneds8mm7l6',
  password : 'ni6xf7pslhbpxp1y',
  database : 'kzz7jkira143zh0d'
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;
