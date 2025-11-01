import React, { lazy, Suspense, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CartProvider } from "./CartContext";
import CartIcon from "./CartIcon";

import "./components/ZebraPage.css";
import "./components/CommonStyles.css";
import "./components/Landing.css";

const Landing = lazy(() => import("./components/Landing"));
const Home = lazy(() => import("./components/Home"));
const Services = lazy(() => import("./components/Services"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Shop = lazy(() => import("./components/ShopComingSoon"));
const Work = lazy(() => import("./components/Work"));
const CartPage = lazy(() => import("./components/CartPage"));

function AnimatedRoutes() {
  const location = useLocation();
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    import("./components/Home");
    setIsFading(true);
    const timer = setTimeout(() => setIsFading(false), 500);
    return () => {
      clearTimeout(timer);
      setIsFading(false); 
    };
  }, [location]);
  
  return (
    <>
      <div className={`fade-overlay ${isFading ? "active" : ""}`} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <CartIcon />
        <AnimatedRoutes />
      </Router>
    </CartProvider>
  );
}