function getCart(req, res) {
    res.render('shop/cart', {pageTitle: 'Your Cart', path: '/cart',})
}

function postCart(req, res) {
    const prodId = req.body.productId;
    res.redirect('/cart');
}

module.exports = {getCart, postCart};