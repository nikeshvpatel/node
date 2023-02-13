function getCheckout(req, res) {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    })
}

module.exports = {getCheckout};