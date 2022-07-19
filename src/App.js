import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';

function App() {
    const [auth, setAuth] = useState(false);
    return (
        <>
            <BrowserRouter>
                {/* 連結到各頁面連結 */}
                <Link to="/">Home</Link>
                <br />
                <Link to="product">Product</Link>
                <br />
                <Link to="cart">Cart</Link>
                <br />
                <Link to="login">Login</Link>

                <Routes>
                    {/* 路由表 */}
                    <Route path="/" element={<Home auth={auth} />} />
                    <Route path="cart" element={<Cart auth={auth} />} />
                    <Route path="product" element={<Product auth={auth} />} />
                    <Route
                        path="login"
                        element={<Login auth={auth} setAuth={setAuth} />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
