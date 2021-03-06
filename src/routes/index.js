import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from './Login'
import Chat from './Chat'
import NotFound from "./404";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<h1>Main Page</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/other" element={<h1>Other</h1>} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
