var router = require('express').Router();

if(DEBUG) {
    console.log('ROUTE: /api/products');
}

// http://localhost:3000/api/products/
const loginsRouter = require('./products')
router.use('/products', loginsRouter); // ???????

module.exports = router;