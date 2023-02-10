const {Product} = require('../models/product.model');

function getAddProduct(req, res) {
    return res.status(200).render('add-products', {pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true});
}

function postAddProduct(req, res) {
    // products.push({...req.body});
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

function getProducts(req, res) {
    const products = Product.fetchAll();
    res.status(200).render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    })
}

module.exports = {getAddProduct, postAddProduct, getProducts};