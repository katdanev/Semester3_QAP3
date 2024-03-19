const express = require('express');
const router = express.Router();
const productsDal = require('../services/pg.products.dal')

router.get('/', async (req, res) => { // list all logins
  const theProducts = [
      {id: 1, username: 'example', password: 'example'},
      {id: 4, username: 'frodob', password: 'example'},
      {id: 7, username: 'bilbob', password: 'example'}
  ];
  try {
     let theLogins = await loginsDal.getLogins(); 
      if(DEBUG) console.table(theLogins);
      res.render('logins', {theLogins});
  } catch {
      res.render('503');
  }
});


module.exports = router