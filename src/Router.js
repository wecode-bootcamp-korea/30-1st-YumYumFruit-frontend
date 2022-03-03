import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../src/components/Nav/Nav';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import ProductList from './pages/Main/ProductList/ProductList';

// useLocation은 Router에서만 사용가능하다 에러 뜸
function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/signup" element={<Signup />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/products/list" element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
