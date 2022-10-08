import 'antd/dist/antd.css';
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import client from '../lib/apollo-client'
import { SessionProvider } from 'next-auth/react'


type ComponentWithPageLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: React.ComponentType<any>
  }
}

function Grind({ Component, pageProps }: ComponentWithPageLayout) {
  return ( 
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        {Component.PageLayout ?  (
          <Component.PageLayout>
            <Component {...pageProps} />
          </Component.PageLayout>
        ) : (
          <Component {...pageProps} />
        )}
        
      </ApolloProvider>
    </SessionProvider>
  );
}

export default Grind
