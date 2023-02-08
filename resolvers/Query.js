exports.Query = {
    hello: () => {
        return "Hello World!";
    },
    numberOfAnumals: () => {
        return 55;
    },
    price: () => {
        return 3435.1544;
    },
    isCool: () => {
        return true;
    },
    array: () => {
        return ["Hello", "World", "!"];
    },
    products: (parent, {filter}, {db}) => {
        let filteredProducts = db.products;
        if (filter) {
            if (filter.onSale === true) {
                filteredProducts = filteredProducts.filter(product => {
                    return product.onSale;
                })
            }
        }
        return filteredProducts;
    },
    product: (parent, {id}, {db}) => {
        return db.products.find((product) => product.id === id);
    },
    categories: (parent, args, {db}) => db.categories,
    category: (parent, {id}, {db}) => {
        return db.categories.find((category) => category.id === id);
    }
}