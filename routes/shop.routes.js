const express = require('express');
const path = require('path');
const shopRoutes = express.Router();
const {products} = require('./admin.routes');

shopRoutes.get('/', (req, res) => {
    res.status(200).render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    })
})


module.exports = shopRoutes;