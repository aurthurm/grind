import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { BACKEND_GRAPHQL } from './constants';

const client = new ApolloClient({
    uri: BACKEND_GRAPHQL,
    cache: new InMemoryCache(),
});
  
export default client;