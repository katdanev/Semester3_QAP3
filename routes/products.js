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