import React from 'react';
import Dropdown from './Dropdown';
import CurrentMeasurement from './CurrentMeasurement';
import { ApolloClient, InMemoryCache, ApolloProvider as ApolloHooksProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://react.eogresources.com/graphql',
  cache: new InMemoryCache(),
});

const Dashboard = () => {
  return (
    <ApolloHooksProvider client={client}>
      <Dropdown />
    </ApolloHooksProvider>
  );
};

export default Dashboard;
