import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./ZebraPage.css";
import "./CommonStyles.css";

let hasShownMailingList = false;

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showMailingList, setShowMailingList] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!hasShownMailingList) {
      setShowMailingList(true);
      hasShownMailingList = true;
    }

    const handleScroll = () => {
      const header = document.querySelector('.home-header');

      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleCloseMailingList = () => {
    setShowMailingList(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        alert("Thanks for subscribing! You’re now on the list.");
        setEmail("");
      } else {
        alert("Subscription failed. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please try again later.");
    }

    setShowMailingList(false);
  };

  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <header className="home-header zebra-header">
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
          <button className="nav-btn" onClick={() => navigate("/work")}>Work</button>
          <button className="nav-btn" onClick={() => navigate("/services")}>Services</button>
          <button className="nav-btn" onClick={() => navigate("/shop")}>Shop</button>
          <button className="nav-btn" onClick={() => navigate("/about")}>About</button>
          <button className="nav-btn" onClick={() => navigate("/contact")}>Contact</button>
        </div>
      </header>

      <main>
        <div className="content-container">
          <div className="box box1 desktop-only">
            <img src="/Logo-Tall-Transparent.png" alt="Logo" className="box1-image" />
          </div>

          <div className="right-column">
            <div className="box box2"></div>

            <div className="merged-top mobile-only">
              <img
                src="/Logo-Tall-Transparent.png"
                alt="Logo"
                className="mobile-logo"
              />
            </div>
            <div className="merged-bottom mobile-only">
              {showMailingList && (
                <motion.div
                  className="mailing-list-mobile"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <button
                    className="close-btn"
                    onClick={handleCloseMailingList}
                    aria-label="Close mailing list"
                  >
                    ✕
                  </button>

                  <div className="mailing-list-content">
                    <h2>Join Our Mailing List</h2>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button type="submit">Sign Up</button>
                    </form>
                  </div>
                </motion.div>
              )}
            </div>

            <div className="middle-section">
              <div className="left-half">
                <div className="box box3 desktop-only">
                  <div className="coming-soon-coin">
                    <div className="coin-face coin-front">
                      <span className="coin-text">SHOP COMING SOON</span>
                    </div>
                    <div className="coin-face coin-back">
                      <span className="coin-text">C. HAUS OBJEKT</span>
                    </div>
                  </div>
                </div>
                <div className="bottom-row">
                  <div className="box box5-left"></div>
                  <div className="box box5-right"></div>
                </div>
              </div>
              <div className="box box4and6">
                {showMailingList ? (
                  <motion.div
                    className="mailing-list-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <button
                      className="close-btn"
                      onClick={handleCloseMailingList}
                      aria-label="Close mailing list"
                    >
                      ✕
                    </button>

                    <div className="mailing-list-content">
                      <h2>Join Our Mailing List</h2>
                      <form onSubmit={handleSubmit}>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <button type="submit">Sign Up</button>
                      </form>
                    </div>
                  </motion.div>
                ) : (
                  <div className="box46-placeholder"></div>
                )}
              </div>
            </div>
          </div>
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
    </motion.div>
  );
}