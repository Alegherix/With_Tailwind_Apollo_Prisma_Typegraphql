import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-micro';
import { schema } from 'src/schema';
import { createContext } from 'src/prisma';

const apolloServer = new ApolloServer({
  context: createContext,
  schema,
  tracing: process.env.NODE_ENV === 'development',
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({
  path: '/api/graphql',
});
