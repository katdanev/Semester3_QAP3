var router = require('express').Router();
const loginsDal = require('../../services/pg.products.dal')

// api/products
router.get('/', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/products/ GET ' + req.url);
    try {
        let theLogins = await loginsDal.getProducts(); 
        res.json(theLogins);
    } catch {
        // log this error to an error log file.
        res.statusCode = 503;
        res.json({message: "Service Unavailable", status: 503});
    }
});

// Get a product by ID
router.get('/:id', async (req, res) => {
    if(DEBUG) console.log('ROUTE: /api/products/:id GET ' + req.url);
    try {
        let productId = req.params.id;
        let product = await loginsDal.getProductById(productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({message: "Product not found", status: 404});
        }
    } catch {
        // log this error to an error log file.
        res.status(503).json({message: "Service Unavailable", status: 503});
    }
});


module.exports = router;


// const express = require('express');
// const router = express.Router();
// const productsDal = require('../services/pg.products.dal')

// router.get('/', async (req, res) => { // list all logins
//   const theProducts = [
//       {id: 1, username: 'example', password: 'example'},
//       {id: 4, username: 'frodob', password: 'example'},
//       {id: 7, username: 'bilbob', password: 'example'}
//   ];
//   try {
//      let theLogins = await loginsDal.getLogins(); 
//       if(DEBUG) console.table(theLogins);
//       res.render('logins', {theLogins});
//   } catch {
//       res.render('503');
//   }
// });


// module.exports = router