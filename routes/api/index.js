var router = require('express').Router();

if(DEBUG) {
    console.log('ROUTE: /api/products');
}

router.get('/', (req, res) => {
    res.send('API HOME PAGE');
});

// http://localhost:3000/api/products/
const productsRouter = require('./products')
router.use('/products', productsRouter); // ???????

module.exports = router;