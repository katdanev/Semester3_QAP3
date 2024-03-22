//pg.products.dal.js
// this page is for the data access layer for the products table
// this is where we will write the SQL queries to interact with the database
const dal = require("./pg.shop_db"); // Import the connection pool from the DAL


var addProduct = function(name, description, price) {
    if(DEBUG) console.log("logins.pg.dal.addLogin()");
    return new Promise(function(resolve, reject) {
      const sql = `INSERT INTO public."Products"(name, description, price) \
          VALUES ($1, $2, $3);`;
      dal.query(sql, [name, description, price], (err, result) => {
        if (err) {
            if(DEBUG) console.log(err);
            reject(err);
          } else {
            resolve(result.rows);
          }
      }); 
    });
  };


// get all products.
var getProducts = function() {
  if(DEBUG) console.log("products.pg.dal.getProducts()");
  return new Promise(function(resolve, reject) {
    const sql = `SELECT id, name, description, price FROM public."Products" ORDER BY id DESC LIMIT 15;` // put this SQL in a file, тобто ми витягуємо з бази даних 7 останніх логінів (в нас їх три по факту)
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

// get a product by id
var getProductById = function(id) {
  if(DEBUG) console.log("products.pg.dal.getProductById()");
  return new Promise(function(resolve, reject) {
    const sql = `SELECT name, description, price FROM public."Products" WHERE id = $1;`
    dal.query(sql, [id], (err, result) => {
      if (err) {
        // logging should go here
        if(DEBUG) console.log(err);
        reject(err);
      } else {
        resolve(result.rows);
      }
    }); 
  }); 
}

var patchProduct = function(id, name, description, price) {
  if(DEBUG) console.log("products.pg.dal.patchProduct()");
  return new Promise(function(resolve, reject) {
    const sql = `UPDATE public."Products" SET name=$2, description=$3, price=$4 WHERE id=$1;`;
    dal.query(sql, [id, name, description, price], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    }); 
  });
};

var deleteProduct = function(id) {
  if(DEBUG) console.log("products.pg.dal.deleteProduct()");
  return new Promise(function(resolve, reject) {
    const sql = `DELETE FROM public."Products" WHERE id = $1;`;
    dal.query(sql, [id], (err, result) => {
      if (err) {
          reject(err);
        } else {
          resolve(result.rows);
        }
    }); 
  });
};


module.exports = {
  addProduct,
  getProducts,
  getProductById,
  patchProduct,
  deleteProduct

 
}