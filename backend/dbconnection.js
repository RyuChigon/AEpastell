const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'aieducation',
  password: 'AE@pastell123',
  database: 'pastell'
});

module.exports=connection;