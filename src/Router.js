import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/signup" element={<Signup />} />;
        <Route path="/login" element={<Login />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
