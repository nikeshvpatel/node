const {Product} = require("../models/product.model");

async function getProduct(req, res) {
    const prodId = req.params.productId;
    try {
        let [prodFetch] = await Product.findById(prodId);
        res.render('shop/product-detail', {...prodFetch[0], pageTitle: prodFetch[0].title, path: '/products'})
    } catch (e) {
        console.log(`getProduct() -> ${e.message}`)
    }
}

module.exports = {getProduct};