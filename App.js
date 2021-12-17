import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  split,
} from '@apollo/client';

import { getMainDefinition } from '@apollo/client/utilities';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SingleWorkout from './screens/SingleWorkout/index';
import Tabs from './components/navigation/index';
const httpLink = new HttpLink({
  uri: 'https://advanced-terrier-92.hasura.app/v1/graphql',
  headers: {
    'x-hasura-admin-secret':
      '67l8321d8TTYtxZaxo4BRd8GoVoois9O4mZWmEE0PLBncPHtezBB31sPxUavbBgQ',
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition';
  },

  httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});

const Stack = createStackNavigator();
export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </ApolloProvider>
  );
}
