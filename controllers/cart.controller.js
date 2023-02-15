const {Product} = require("../models/product.model");
const Cart = require("../models/cart.model");

function getCart(req, res) {
    res.render('shop/cart', {pageTitle: 'Your Cart', path: '/cart',})
}

async function postCart(req, res) {
    const prodId = req.body.productId;
    const product = await Product.findById(prodId);
    Cart.addProduct(prodId, product.price);
    res.redirect('/cart');
}

module.exports = {getCart, postCart};