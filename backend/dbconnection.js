const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'test',
  password: 'test1234',
  database: 'pastell'
});

module.exports=connection;