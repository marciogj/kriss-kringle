const { ApolloServer } = require('apollo-server');
const { importSchema } = require('graphql-import');
const typeDefs = importSchema('./src/schema.graphql');
const { APP_SECRET, getUserId, getUser } = require('./security/jwt-user')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const AuthPayload = require('./resolvers/AuthPayload')

const resolvers = {
  Query,
  Mutation,
  AuthPayload
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {

    const authorization = req.headers.authorization || '';

    if (authorization) {
      const userId = getUserId(authorization);
      console.log('userId ' + userId);
      const user = getUser(userId);
      console.log('user ' + user);
      //Add user to context for authenticated session
      return { user };
    }

}
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});