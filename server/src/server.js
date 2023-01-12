import http from "http";
import cors from "cors";
import fs from "fs";
import bodyParser from "body-parser";
import session from "express-session";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

import app from "./app";
import resolvers from "./resolvers/resolvers";
import connectDB from "./db";

import getAuthUser from "./middleware/authUser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const corsOptions = {
  origin: [
    "https://studio.apollographql.com",
    "http://localhost:4000/graphql",
    "http://localhost:4000",
    "http://localhost:3000",
  ],
  credentials: true,
};
const sessOptions = {
  secret: "keybord cat",
  resave: true,
  saveUninitialized: true,
};

const httpServer = http.createServer(app);

app.use(cors(corsOptions));
(async function () {
  const server = new ApolloServer({
    typeDefs: fs.readFileSync(join(__dirname, "schema.graphql"), "utf8"),
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  const PORT = process.env.PORT || 4000;

  connectDB();

  await server.start();
  
  app.use(session(sessOptions));

  app.use(
    "/graphql",
    cors(corsOptions),
    bodyParser.json(),
    session(sessOptions),
    expressMiddleware(server, {
      context: async ({ req, res }) => ({ req, res, getAuthUser }),
      // context: async ({req}) => ({token: req.headers.token})
    })
  );

  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));
  console.log(`🚀-------------------------------------------------`);
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  console.log(`🚀-------------------------------------------------`);
})();

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION 🔥🔥 Shutting down...");
  console.error("Error🔥🔥", err.message);

  httpServer.close(async () => {
    process.exit(1);
  });
});
