import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes'

console.log("jsandjknasdjkn")
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </React.StrictMode>
)