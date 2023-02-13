const {Product} = require("../models/product.model");

function getAddProduct(req, res) {
    return res.status(200).render('admin/add-products', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
}

async function getProducts(req, res) {
    let products = await Product.fetchAll();
    res.status(200)
        .render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/admin/products',
        })
}

async function postAddProduct(req, res) {
    const product = new Product({...req.body});
    await product.save();
    res.redirect('/');
}

module.exports = {getAddProduct, getProducts, postAddProduct};
