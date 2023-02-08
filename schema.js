const {gql} = require("apollo-server");

//String, Int, Float, Boolean, ID == scalar types
//! - non-nullable field 

exports.typeDefs = gql`
    type Query {
        hello: String! 
        numberOfAnumals: Int
        price: Float
        isCool: Boolean
        array: [String!]!
        products (filter: ProductsFilterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }
    type Mutation {
        addCategory(input: AddCategoryInput!): Category!
        addProduct(input: AddProductInput!): Product!
        deleteCategory(id: ID!): Boolean!
        deleteProduct(id: ID!): Boolean!
        updateCategory(id: ID!, input: UpdateCategoryInput!): Category
        updateProduct(id: ID!, input: UpdateProductInput!): Product
    }
    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
        category: Category
        reviews: [Review!]!
    }
    type Category {
        name: String!
        id: ID!
        products: [Product!]!
    }
    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String!
        rating: Int!
    }
    input ProductsFilterInput {
        onSale: Boolean
    }
    input AddCategoryInput {
        name: String!
    }
    input UpdateCategoryInput {
        name: String!
    }
    input AddProductInput {
      name: String!
      description: String!
      quantity: Int!
      price: Float!
      image: String!
      onSale: Boolean!
      categoryId: String
    }
    input UpdateProductInput {
      name: String!
      description: String!
      quantity: Int!
      price: Float!
      image: String!
      onSale: Boolean!
      categoryId: String
    }
`;