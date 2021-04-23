import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://api.testingwebsite.pl/graphql',
  cache: new InMemoryCache(),
});

export default client;
