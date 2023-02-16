const {Product} = require("../models/product.model");
const Cart = require("../models/cart.model");

async function getCart(req, res) {
    const cartProducts = await Cart.getProducts();
    const mainProducts = await Product.fetchAll();
    let combinedData = mainProducts.map(product => {
        return {...product, qty: cartProducts.products.find(findProduct => findProduct.id === product.id).qty}
    })
    res.render('shop/cart', {pageTitle: 'Your Cart', path: '/cart', products: combinedData})
}

async function postCart(req, res) {
    const prodId = req.body.productId;
    const product = await Product.findById(prodId);
    Cart.addProduct(prodId, product.price);
    res.redirect('/cart');
}

module.exports = {getCart, postCart};