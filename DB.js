let level = require("level")
let path = require('path')

var dbPath = process.env.DB_PATH || path.join(__dirname, 'mydb');  
var db = level(dbPath);
module.exports = db;