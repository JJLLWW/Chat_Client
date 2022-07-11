import React from 'react';
import {Routes, Route} from 'react-router-dom';

export default function AppRoutes() {
    return (
    <Routes>
          <Route path="/" element={<h1>Main Page</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
    </Routes>
    );
}