function getCart(req, res) {
    res.render('shop/cart', {pageTitle: 'Your Cart', path: '/cart',})
}

module.exports = {getCart};