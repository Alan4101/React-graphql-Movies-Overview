import * as fs from 'fs';
import { ApolloServer } from "apollo-server";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import resolvers from "./resolvers/resolvers";
import connectDB from './db';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = new ApolloServer({
  typeDefs: fs.readFileSync(join(__dirname, 'schema.graphql'), 'utf8'),
  resolvers,
})

connectDB();
server.listen().then(({url})=> console.log('Server runing on '+ url))