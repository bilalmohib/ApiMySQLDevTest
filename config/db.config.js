'use strict';
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'eu-cdbr-west-03.cleardb.net',
  user     : 'b0a1accfa0decf',
  password : '3edef4cd',
  database : 'heroku_624aae288a3b296'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;