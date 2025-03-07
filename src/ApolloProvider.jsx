import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: import.meta.env.VITE_WEBSITE_URL + "graphql",
    cache: new InMemoryCache(),
});

const ApolloAppProvider = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloAppProvider;
