import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./components/ZebraPage.css";
import "./components/CommonStyles.css";
import "./components/Landing.css";

import Landing from "./components/Landing";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Work from "./components/Work";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}