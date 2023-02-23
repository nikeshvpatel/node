const {Product} = require('../models/product.model');


async function getProducts(req, res) {
    try {
        let [products] = await Product.fetchAll();
        res.status(200)
            .render('shop/product-list', {
                prods: products,
                pageTitle: 'All Products',
                path: '/products',
            })
    } catch (e) {
        console.log(`getProducts() -> ${e.message}`);
    }
}

async function getIndex(req, res) {
    try {
        let [products] = await Product.fetchAll();
        res.status(200)
            .render('shop/index', {
                prods: products,
                pageTitle: 'Shop',
                path: '/',
            })
    } catch (e) {
        console.log(`getIndex() -> ${e.message}`);
    }
}

module.exports = {getProducts, getIndex};