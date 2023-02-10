const express = require('express');
const path = require('path');

const adminRoutes = express.Router();

const products = [];

adminRoutes.get('/add-product', (req, res) => {
    res.status(200).render('add-products', {pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true});
})

adminRoutes.post('/add-product', (req, res) => {
    products.push({...req.body});
    res.redirect('/');
    console.log(products);
})

module.exports = {adminRoutes, products};