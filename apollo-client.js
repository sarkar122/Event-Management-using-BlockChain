import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api.thegraph.com/subgraphs/name/charliehexx/rsvp-dapp",
    cache: new InMemoryCache(),
});

export default client;