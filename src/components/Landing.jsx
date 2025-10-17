import { useEffect } from "react";
import { motion } from "framer-motion";
import "./Landing.css";

export default function Landing() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/home.html"; 
    }, 5000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-container">
      <motion.div
        className="background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      />
      <motion.h1
        className="company-name"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        C. Haus Objekt
      </motion.h1>
      <motion.div
        className="black-box"
        initial={{ width: 100, height: 100 }}
        animate={{ width: "80%", height: 200 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      >
        <div className="motto">
          <p>Timeless culture</p>
          <p>Objects to gift</p>
          <p>Designs to keep</p>
        </div>
      </motion.div>
      <motion.div
        className="background"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      />
    </div>
  );
}