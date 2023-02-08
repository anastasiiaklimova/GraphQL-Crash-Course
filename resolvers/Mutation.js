const {v4: uuid} = require("uuid");
const { Category } = require("./Catergory");

exports.Mutation = {
    addCategory: (parent, {input}, {db}) => {
        const {name} = input;
        const newCategory = {
            id: uuid(),
            name
        }
        db.categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, {input}, {db}) => {
        const {name, description, quantity, price, image, onSale, categoryId} = input;
        const newProduct = {
            id: uuid(),
            name,
            description,
            quantity,
            price,
            image,
            onSale,
            categoryId
        }
        db.products.push(newProduct);
        return newProduct;
    },
    deleteCategory: (parent, {id}, {db}) => {
        db.categories = db.categories.filter(category => category.id != id);
        db.products = db.products.map(product => {
            if (product.categoryId === id) return {
                ...product,
                categoryId: null
            }
            else return product
        })
        return true;
    },
    deleteProduct: (parent, {id}, {db}) => {
        db.products = db.products.filter(product => product.id != id);
        db.reviews = db.reviews.filter(review => review.productID != id);
        return true;
    },
    updateCategory: (parent, {id, input}, {db}) => {
        const index = db.categories.findIndex(category => category.id === id);
        if (index === -1) return null;
        db.categories[index] = {
            ...db.categories[index],
            ...input,
        };
        return  db.categories[index];
    },
    updateProduct: (parent, {id, input}, {db}) => {
        const index = db.products.findIndex(product => product.id === id);
        if (index === -1) return null;
        db.products[index] = {
            ...db.products[index],
            ...input,
        };
        return  db.products[index];
    }
}