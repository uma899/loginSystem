import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/login/login';
import Register from './pages/register/register';
import Notfound from './pages/notfound';
import Welcome from './pages/welcome/welcome';
import Home from './pages/home/home';
import Addproduct from './pages/Addproducts/addproduct';
import ViewDetails from './pages/home/details/viewDetails';
import Cart from './pages/cart/cart';
import Admin from './pages/admin/admin';
import Profile from './pages/profile/profile';

export default function Index() {
    const userId = localStorage.getItem("id");
return (
<BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Notfound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/addproduct" element={<Addproduct />} />
        <Route path="/product/:id" element={<ViewDetails
         />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/admin" element={<Admin />} />
         <Route path="/profile" element={<Profile />} />

    </Routes>
</BrowserRouter>
)}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
