const {Product} = require('../models/product.model');


async function getProducts(req, res) {
    let products = await Product.fetchAll();
    res.status(200)
        .render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products',
        })
}

async function getIndex(req, res) {
    let products = await Product.fetchAll();
    res.status(200)
        .render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
        })
}

module.exports = {getProducts, getIndex};