// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Industries from "../components/Industries";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import ContactUs from "../components/ContactUs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/services" element={<Services />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
};

export default AppRoutes;
