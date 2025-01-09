import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/login';
import Register from './pages/register/register';
import Notfound from './pages/notfound';
import Welcome from './pages/welcome/welcome';

export default function Index() {
    const userId = localStorage.getItem("id");
return (
<BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/*" element={<Notfound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {userId ? (<Route path="/welcome" element={<Welcome />} />): null}



    </Routes>
</BrowserRouter>
)}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
