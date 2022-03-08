import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from 'components/Nav/Nav';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
// import ProductItemPage from './pages/Main/ProductItemPage';
import ProductItemPage from './pages/ProductItem/ProductItemPage';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/signup" element={<Signup />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/productitempage" element={<ProductItemPage />} />;
        {/* <Route path="/productitempage/:id" element={<ProductItemPage />} />; */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
