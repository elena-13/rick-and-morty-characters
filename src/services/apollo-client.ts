import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const link = new HttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
});

const client: ApolloClient<{}> = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
