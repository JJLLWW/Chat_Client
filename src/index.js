import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import {
    ThemeProvider,
    createTheme,
} from '@mui/material/styles';

const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache()
})

console.log("jsandjknasdjkn");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <ThemeProvider theme={DarkTheme}>
                <BrowserRouter>
                    <AppRoutes />
                </BrowserRouter>
            </ThemeProvider>
        </ApolloProvider>
    </React.StrictMode>
);
