const express = require('express');

const router = express.Router();
const dbClient = require('../helper/dbClient.js');

/* GET home page. */
<<<<<<< HEAD

=======
>>>>>>> df6decb32e03c1ae8f3385fa91fa801714dd4319
router.get('/', (req, res, next) => {
  const callBack = (error, products) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.render('index', {
        title: 'AcmeInc',
        description: 'We sell the finest goods and services.',
        products,
      });
    }
  };
  dbClient.getProducts({}, callBack);

});

/* GET single-product information page. */
<<<<<<< HEAD


=======
>>>>>>> df6decb32e03c1ae8f3385fa91fa801714dd4319
router.get('/products/:urlPath', (req, res, next) => {
  const urlPath = req.params.urlPath;
  const callBack = (error, products) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.render('single-product', {
        title: products[0].title,
        description: `We sell the finest goods and services. 
<<<<<<< HEAD
                This is the ${products[0].title}.`,
=======
 
                This is the ${products[0].title}.`,

>>>>>>> df6decb32e03c1ae8f3385fa91fa801714dd4319
        product: products[0],
      });
    }
  };
  dbClient.getProducts({ urlPath }, callBack);

});

module.exports = router;
<<<<<<< HEAD

=======
>>>>>>> df6decb32e03c1ae8f3385fa91fa801714dd4319
