const { ApolloServer } = require("apollo-server");
const { Category } = require("./resolvers/Catergory");
const { Product } = require("./resolvers/Product");
const { Query } = require("./resolvers/Query");
const { typeDefs } = require("./schema");
const { db } = require("./db");
const { Mutation } = require("./resolvers/Mutation");


const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Category,
        Product,
        Mutation
    },
    context: {
        db
    },
});

server.listen().then(({url}) => {
    console.log("sever is ready at " + url);
});