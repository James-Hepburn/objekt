import React, { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import "./components/ZebraPage.css";
import "./components/CommonStyles.css";
import "./components/Landing.css";

const Landing = lazy(() => import("./components/Landing"));
const Home = lazy(() => import("./components/Home"));
const Services = lazy(() => import("./components/Services"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Shop = lazy(() => import("./components/Shop"));
const Work = lazy(() => import("./components/Work"));

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    import("./components/Home"); 
  }, []);

  return (
    <AnimatePresence mode="sync">
      <Suspense fallback={<div style={{ background: "white", height: "100vh" }} />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}