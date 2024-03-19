const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres', 
  host: 'localhost', 
  database: 'Shop',
  password: '07911', // replaced with my password
  port: 5432, // in PGAdmin, right-click on the server and select Properties to find the port number
});
module.exports = pool;