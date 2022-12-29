import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { MongoDBConnect } from "./dbconnect/MongoDBConnect";
import { generateSchema } from "./graphql/generateSchema";

const schema = generateSchema()

const server = new ApolloServer({
  ...schema
});

(async () => {
  
  const connectMongo = new MongoDBConnect();
  connectMongo.initializeDBConnection();
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
})();
