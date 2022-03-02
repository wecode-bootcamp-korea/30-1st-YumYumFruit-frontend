import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';

// import ProductItem from './pages/ProductItem/ProductItem';
import ProductItem from './pages/ProductItem/ProductItem';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/signup" element={<Signup />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/productitem" element={<ProductItem />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
