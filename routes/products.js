//products.js

const express = require('express');
const router = express.Router();
const productsDal = require('../services/pg.products.dal')

router.get('/', async (req, res) => {
  // const theProductss = [
  //     {id: 1, name: 'example', description: 'example', price: 100},   
  // ];
  try {
     let theProducts = await productsDal.getProducts(); 
      if(DEBUG) console.table(theProducts);
      res.render('products', {theProducts});
  } catch {
      res.render('503');
  }
});

router.get('/:id', async (req, res) => { // get a login by id
  // const aProduct = [ // temporary data test from memory not from  postgresql database
  //   { name: 'example', description: 'example', price: 100}
  // ];
  try {
      let aProduct = await productsDal.getProductById(req.params.id); // from postgresql
    // if(DEBUG) console.table(aProduct);
      if (aProduct.length === 0)
          res.render('norecord')
      else
          res.render('product', {aProduct});
  } catch {
      res.render('503');
  }
});

router.post('/', async (req, res) => {
  if(DEBUG) console.log("products.POST");
  try {
      await productsDal.addProduct(req.body.name, req.body.description, req.body.price);
      res.redirect('/products/');
  } catch (err){
 //     if(DEBUG) console.log(err);
      // log this error to an error log file.
      res.render('503');
  } 
});

module.exports = router