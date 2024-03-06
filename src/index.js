import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  About,
  Usa,
  UnitedKingdom,
  Australia,
  Canada,
  Ireland,
  Italy,
  Services,
  Financial,
  Register,
} from "././Imports";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/financial" element={<Financial />} />
      <Route path="/register" element={<Register />} />
      <Route path="/usa" element={<Usa />} />
      <Route path="/united-kingdom" element={<UnitedKingdom />} />
      <Route path="/australia" element={<Australia />} />
      <Route path="/canada" element={<Canada />} />
      <Route path="/ireland" element={<Ireland />} />
      <Route path="/italy" element={<Italy />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
