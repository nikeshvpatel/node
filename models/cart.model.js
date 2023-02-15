const fs = require('fs');
const path = require("path");

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json')

class Cart {
    static addProduct(id, productPrice) {
        //fetch the prev cart
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0}
            if (!err) {
                cart = JSON.parse(fileContent);
            }
            if (cart.products.find(prod => prod.id === id)) {
                cart.products = cart.products
                    .map((prod => prod.id === id ? {...prod, qty: prod.qty += 1} : prod));
            } else {
                cart.products = [...cart.products, {id: id, qty: 1}]
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            })
        })
    }
}

module.exports = Cart;