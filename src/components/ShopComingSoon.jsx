import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./BlackPage.css";
import "./ShopComingSoon.css";

export default function ShopComingSoon() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [confetti, setConfetti] = useState([]);
  const [activeBox, setActiveBox] = useState(null);
  const lids = [useAnimation(), useAnimation(), useAnimation()];

  useEffect(() => {
    const menuToggle = document.getElementById("menuToggle");
    const rightNav = document.getElementById("rightNav");
    const handleClick = () => {
      rightNav.classList.toggle("open");
      menuToggle.textContent = rightNav.classList.contains("open") ? "✕" : "☰";
    };
    menuToggle.addEventListener("click", handleClick);
    return () => menuToggle.removeEventListener("click", handleClick);
  }, []);

  const createConfetti = (color, index) => {
    const pieces = Array.from({ length: 40 }).map((_, i) => ({
      id: `${index}-${i}`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 8 + 4,
      delay: Math.random() * 0.3,
      color:
        Math.random() < 0.33
          ? "#000"
          : Math.random() < 0.66
          ? "#fff"
          : color,
      x: (Math.random() - 0.5) * 200,
      y: -Math.random() * 200 - 150,
      rotate: Math.random() * 720 - 360,
      bottom: window.innerWidth <= 900 ? "130px" : "85px",
    }));
    setConfetti(pieces);
  };

  const openBox = (index, color) => {
  if (activeBox !== null) return; 
  setActiveBox(index);

  const box = document.querySelector(`.gift-box-${index + 1}`);
    box.classList.add("animating");

    lids[index]
        .start({
        x: [0, -8, 8, -6, 6, -4, 4, -2, 2, 0],
        transition: { duration: 0.6, ease: "easeInOut" },
        })
        .then(() => {
        lids[index].start({
            y: [0, -40, -80, -160],
            rotateX: [0, -25, -35],
            scale: [1, 1.05, 1],
            transition: { duration: 1.4, ease: [0.45, 0, 0.55, 1] },
        });
        createConfetti(color, index);
        setTimeout(() => {
            box.classList.remove("animating");
        }, 1400);
        });
    };

  const boxColors = ["#CCFF00", "#00F6FF", "#FF6EC7"];

  return (
    <div className="other-pages">
      <header className="home-header">
        <div className="left-nav">
          <div className="logo-placeholder" onClick={() => navigate("/home")}>
            <img src="Logo-Wide.png" alt="Logo" className="logo-image" />
          </div>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          id="menuToggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <div className="bar top"></div>
          <div className="bar middle"></div>
          <div className="bar bottom"></div>
        </button>

        <div className={`right-nav ${menuOpen ? "open" : ""}`} id="rightNav">
          <button className="nav-btn" onClick={() => navigate("/services")}>Services</button>
          <button className="nav-btn" onClick={() => navigate("/work")}>Work</button>
          <button className="nav-btn" onClick={() => navigate("/shop")}>Shop</button>
          <button className="nav-btn" onClick={() => navigate("/about")}>About</button>
          <button className="nav-btn" onClick={() => navigate("/contact")}>Contact</button>
        </div>
      </header>

      <main className="shop-coming-soon">
        <h1 className="coming-soon-title">Shop Coming Soon!</h1>
        <h4 className="coming-soon-description">
          Click a gift below to reveal a surprise discount code you can use on future orders once our shop opens!
        </h4>

        <div className="gift-box-row">
          {boxColors.map((color, index) => (
            <div
                key={index}
                className={`gift-box gift-box-${index + 1} ${activeBox === index ? "opened" : ""}`}
                onClick={() => openBox(index, color)}
            >
              {confetti
                .filter((c) => c.id.startsWith(`${index}-`))
                .map((piece) => (
                  <motion.div
                    key={piece.id}
                    initial={{ opacity: 0, y: 0, x: 0, rotate: 0 }}
                    animate={{
                      opacity: [1, 0.9, 0],
                      y: piece.y,
                      x: piece.x,
                      rotate: piece.rotate,
                      transition: {
                        duration: 2.2,
                        ease: "easeOut",
                        delay: piece.delay,
                      },
                    }}
                    style={{
                      position: "absolute",
                      bottom: piece.bottom,
                      left: piece.left,
                      width: piece.size,
                      height: piece.size * 0.6,
                      backgroundColor: piece.color,
                      borderRadius: 2,
                      zIndex: 50,
                    }}
                  />
                ))}
              <motion.div
                className="gift-lid"
                animate={lids[index]}
                style={{
                  transformOrigin: "center bottom",
                  backgroundColor: color,
                }}
              ></motion.div>
              <div
                className="gift-base"
                style={{ backgroundColor: color }}
              ></div>
            </div>
          ))}
        </div>
      </main>

      <footer className="site-footer">
        <p>
          Questions?{" "}
          <button onClick={() => navigate("/contact")} className="contact-btn">
            Contact us
          </button>
        </p>
        <p>info@chausobjekt.com</p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}