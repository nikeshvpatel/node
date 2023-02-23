const Product = require("../models/product.model");

async function getProduct(req, res) {
    const prodId = req.params.productId;
    try {
        let prodFetch = (await Product.findByPk(prodId)).dataValues;
        // prodFetch = prodFetch.dataValues;
        res.render('shop/product-detail', {...prodFetch, pageTitle: prodFetch.title, path: '/products'})
    } catch (e) {
        console.log(`getProduct() -> ${e.message}`)
    }
}

module.exports = {getProduct};