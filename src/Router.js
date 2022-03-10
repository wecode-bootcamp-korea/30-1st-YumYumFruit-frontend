import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from 'components/Nav/Nav';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
<<<<<<< HEAD
import Footer from './components/Footer/Footer';
=======
import ProductListPage from './pages/ProductListPage/ProductListPage';
import Footer from 'components/Footer/Footer';
>>>>>>> master

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/signup" element={<Signup />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/products" element={<ProductListPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
