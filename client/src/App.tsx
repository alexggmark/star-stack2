import React from 'react'
import {ApolloClientProvider} from './apollo'
import Comp1 from './components/Comp1'

const App = () => {
  return (
    <ApolloClientProvider>
      <Comp1 />
    </ApolloClientProvider>
  );
}

export default App
