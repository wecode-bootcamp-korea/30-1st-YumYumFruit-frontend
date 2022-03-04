import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../src/components/Nav/Nav';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ProductListPage from './pages/Main/ProductListPage/ProductListPage';
import ProductItemPage from './pages/Main/ProductItemPage/ProductItemPage';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/signup" element={<Signup />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/products/list" element={<ProductListPage />} />
        <Route path="/products/product/:id" element={<ProductItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
