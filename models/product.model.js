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
        return db.execute("insert into products (title, price, description, imageUrl) VALUES (?,?,?,?)", [this.title, this.price, this.description, this.imageUrl]);
    }

    static findById(id) {
        return db.execute("select * from products where id=?", [id]);
    }

    static deleteProductById(id) {

    }

    static fetchAll() {
        return db.execute("select * from products")
    }
}

module.exports = {Product}