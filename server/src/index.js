const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema/schema");

const resolvers = require("./resolvers/resolvers");

const starWarsAPI = require("./datasource/people");
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    starWarsAPI: new starWarsAPI(),
  }),
});

server.listen().then(() => {
  console.log(`
        Server is running!
        Listening on port 4000
      `);
});
