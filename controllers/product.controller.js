const {Product} = require("../models/product.model");

async function getProduct(req, res) {
    const prodId = req.params.productId;
    let prodFetch = await Product.findById(prodId);
    res.render('shop/product-detail', {...prodFetch, pageTitle: prodFetch.title, path: '/products'})
}

module.exports = {getProduct};