import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client';
import { onError } from "@apollo/client/link/error"

import CssBaseline from '@mui/material/CssBaseline';
import {
    ThemeProvider,
    createTheme,
} from '@mui/material/styles';

const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const httpLink = new HttpLink({ uri: "http://localhost:8080/graphql" })
const errLink = onError((err_obj) => {
    console.log(err_obj)
})

// error link for error handling
const client = new ApolloClient({
    // uri: "http://localhost:8080/graphql",
    link: from([errLink, httpLink]),
    cache: new InMemoryCache()
})

console.log("jsandjknasdjkn");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ThemeProvider theme={DarkTheme}>
                <CssBaseline />
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </ThemeProvider>
        </ApolloProvider>
    </React.StrictMode>
);
