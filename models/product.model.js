const db = require("../util/database.utils");
const Cart = require("./cart.model");


class Product {

    constructor({id, title, imageUrl, description, price}) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }


    save() {


    }

    static findById(id) {

    }

    static deleteProductById(id) {

    }

    static fetchAll() {
        return db.execute("select * from products")
    }
}

module.exports = {Product}