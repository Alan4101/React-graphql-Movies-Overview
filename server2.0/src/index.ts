import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { MongoDBConnect } from "./dbconnect/MongoDBConnect";
import { generateSchema } from "./graphql/generateSchema";



const schema = generateSchema()

const server = new ApolloServer({
  ...schema
});
const connectMongo = new MongoDBConnect();
  connectMongo.initializeDBConnection();
(async () => {
  
  
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
})();
