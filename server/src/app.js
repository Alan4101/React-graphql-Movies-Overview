const {ApolloServer} = require("apollo-server");
const fs = require('fs')
const path = require('path')

const connectDB = require("./db")
const Query = require("./resolvers/query");
const Mutation = require("./resolvers/mutation")
const resolvers = {
  Query,
  Mutation
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
})

connectDB();
server.listen().then(({url})=> console.log('Server runing on '+ url))