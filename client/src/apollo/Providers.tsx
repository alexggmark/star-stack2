import React from 'react'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

interface IProps {
  children: React.ReactNode
}

export const ApolloClientProvider: React.FC<IProps> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
