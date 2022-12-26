import { ApolloServer } from "apollo-server";
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import * as Query from "./resolvers/query";
import * as Mutation from "./resolvers/mutation";
import connectDB from './db';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const resolvers = {
  Query,
  Mutation
}

const server = new ApolloServer({
  typeDefs: fs.readFileSync(join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
})

connectDB();
server.listen().then(({url})=> console.log('Server runing on '+ url))