import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Tour from "./pages/Tour";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Destination from "./pages/Destination";

import AuthPage from "./pages/Auth"; // FIX: Correct import

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="pt-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destination" element={<Destination />} />
         

          {/* FIX: Correct Login/Register Combined Component */}
          <Route path="/login" element={<AuthPage />} />
          <Route path="/register" element={<AuthPage />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}
