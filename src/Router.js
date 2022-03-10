import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from 'components/Nav/Nav';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Cart from './pages/Cart/Cart';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import Footer from 'components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/signup" element={<Signup />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/users/shoppingcart" element={<Cart />} />;
        <Route path="/products" element={<ProductListPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
