import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { BACKEND_GRAPHQL } from './constants';
import { setContext } from '@apollo/client/link/context';
import { getSession } from "next-auth/react";

  const httpLink = createHttpLink({
    uri: BACKEND_GRAPHQL,
  });

  const authLink = setContext(async (_, { headers }) => {
    const session = await getSession();
    return {
      headers: {
        ...headers,
        authorization: session?.accessToken ? `Bearer ${session?.accessToken}` : "",
        mode: 'cors'
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

// const client = new ApolloClient({
//     uri: BACKEND_GRAPHQL,
//     cache: new InMemoryCache(),
// });
  
export default client;




  
