import { ApolloClient, InMemoryCache, HttpLink, from, split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { onError } from "@apollo/client/link/error"
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({ uri: "http://localhost:8080/graphql" })
const errLink = onError((err_obj) => {
    console.log(err_obj)
})
const wsLink = new GraphQLWsLink(createClient({
    url: "ws://localhost:8080/graphql"
}))

const WsOrHttpLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink
)

// error link for error handling
const client = new ApolloClient({
    link: from([errLink, WsOrHttpLink]),
    cache: new InMemoryCache()
})

export default client