const mysql = require('mysql2')

module.exports = mysql.createConnection({
  host: 'localhost',
  port: 3006,
  user: 'root'
  password: 'rootroot'
  database: 'burger_db'
})