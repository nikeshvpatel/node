const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')


class Product {

    constructor(title) {
        this.title = title;
    }


    save() {
        fs.readFile(p, (err, data) => {
            let products = [];
            if (!err) {
                products = JSON.parse(data);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });

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