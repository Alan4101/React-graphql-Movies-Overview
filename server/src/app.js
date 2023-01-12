import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())

process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION ? Shutting down...');
  console.error('Error?', err.message);
  process.exit(1);
});

export default app

// const server = new ApolloServer({
//   typeDefs: fs.readFileSync(join(__dirname, 'schema.graphql'), 'utf8'),
//   resolvers,
// })

// connectDB();
// server.listen().then(({url})=> console.log('Server runing on '+ url))
