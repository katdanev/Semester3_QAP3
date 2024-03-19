
const dal = require("./pg.shop_db"); // Import the connection pool from the DAL

//get all products.
var getProducts = function() {
  if(DEBUG) console.log("products.pg.dal.getProducts()");
  return new Promise(function(resolve, reject) {
    const sql = `SELECT id, name, description, password FROM public."Products" \
        ORDER BY id DESC LIMIT 15;` // put this SQL in a file, тобто ми витягуємо з бази даних 7 останніх логінів (в нас їх три по факту)
    dal.query(sql, [], (err, result) => {
      if (err) {
        // logging should go here
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    }); 
  }); 
};



module.exports = {
  getProducts
 
}