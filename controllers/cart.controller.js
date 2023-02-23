const {Product} = require("../models/product.model");
const Cart = require("../models/cart.model");

async function getCart(req, res) {
    const cartProducts = await Cart.getProducts();
    const [mainProducts] = await Product.fetchAll();
    let combinedData = cartProducts.products.map(product => {
        return {...product, ...mainProducts.find(findProduct => findProduct.id === product.id)}
    })
    res.render('shop/cart', {pageTitle: 'Your Cart', path: '/cart', products: combinedData})
}

async function postCart(req, res) {
    const prodId = req.body.productId;
    try {
        const [product] = await Product.findById(prodId);
        Cart.addProduct(prodId, product[0].price);
        res.redirect('/cart');
    } catch (e) {
        console.log(`postCart() -> ${e.message}`)
    }
}

async function postCartDeleteItem(req, res) {
    const prodId = req.params.productId;
    try {
        const [product] = await Product.findById(prodId);
        Cart.deleteProduct(prodId, product[0].price);
        res.redirect('/cart');
    } catch (e) {
        console.log(`postCartDeleteItem() -> ${e.message}`)
    }
}

module.exports = {getCart, postCart, postCartDeleteItem};