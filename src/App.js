import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="product" element={<Product />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
