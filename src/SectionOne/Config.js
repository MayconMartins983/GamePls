import {InMemoryCache} from "@apollo/client";
import { HttpLink } from "apollo-link-http"
import { ApolloClient } from "@apollo/client";





const httpLink = new HttpLink ({
    uri: "https://gamespls-api.herokuapp.com/",
})

const client = new ApolloClient ({
    link: httpLink,
    cache: new InMemoryCache(),
})

export default client;