import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import client from './apollo';

import { ApolloProvider } from "@apollo/client";
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
