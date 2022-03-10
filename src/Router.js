import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from 'components/Nav/Nav';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
<<<<<<< HEAD
import Cart from './pages/Cart/Cart';
=======
import ProductListPage from './pages/ProductListPage/ProductListPage';
>>>>>>> master
import Footer from 'components/Footer/Footer';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/signup" element={<Signup />} />;
        <Route path="/login" element={<Login />} />;
<<<<<<< HEAD
        <Route path="/users/shoppingcart" element={<Cart />} />;
=======
        <Route path="/products" element={<ProductListPage />} />
>>>>>>> master
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
