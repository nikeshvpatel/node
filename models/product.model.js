const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')


class Product {

    constructor({id, title, imageUrl, description, price}) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }


    save() {
        fs.readFile(p, (err, data) => {
            let products = [];
            if (!err) {
                products = JSON.parse(data);
            }
            if (this.id) { // updating existing product detail
                products = products.map(prod => prod.id === this.id ? this : prod);
            } else { // Add new Product
                this.id = Math.random().toString();
                products.push(this);
            }
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });

    }

    static findById(id) {
        return new Promise(resolve => {
            fs.readFile(p, (err, data) => {
                if (err) {
                    return resolve([]);
                }
                return resolve(JSON.parse(data).find(product => product.id === id));
            })
        })
    }

    static fetchAll() {
        return new Promise((resolve) => {
            fs.readFile(p, (err, data) => {
                if (err) {
                    return resolve([]);
                }
                resolve(JSON.parse(data));
            })
        })
    }
}

module.exports = {Product}