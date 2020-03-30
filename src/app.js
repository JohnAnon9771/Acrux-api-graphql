import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import resolvers from './resolvers';
import typeDefs from './schema';

class App {
  constructor() {
    this.app = express();
    this.init();
  }

  init() {
    const server = new ApolloServer({ typeDefs, resolvers });
    const app = this.app;
    server.applyMiddleware({ app });
  }
}

export default new App().app;
