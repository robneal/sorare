import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";

import NextHead from "../components/NextHead";

const sorareClient = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:3000/api/graphql',
  }),
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider>
      <NextHead />
      <ApolloProvider client={sorareClient}>
        <Component {...pageProps} />
       </ApolloProvider>
    </ChakraProvider>
  )
}

export default MyApp