import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import schema from './modules';
const app = express();
async function startServer() {
  const server = new ApolloServer({ schema });
  await server.start();
  server.applyMiddleware({ app });
}
startServer();
app.listen({ port: 3000 }, () =>
  console.log(`Server ready at http://localhost:3000`),
);
