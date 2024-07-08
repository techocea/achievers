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
} from "./utils/Imports";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Destinations from "./pages/Destinations";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ToastContainer />
    <Header />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/study-destinations" element={<Destinations />} />
      <Route path="/financial" element={<Financial />} />
      <Route path="/register" element={<Register />} />
      <Route path="/study-destinations/usa" element={<Usa />} />
      <Route
        path="/study-destinations/united-kingdom"
        element={<UnitedKingdom />}
      />
      <Route path="/study-destinations/australia" element={<Australia />} />
      <Route path="/study-destinations/canada" element={<Canada />} />
      <Route path="/study-destinations/ireland" element={<Ireland />} />
      <Route path="/study-destinations/italy" element={<Italy />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
