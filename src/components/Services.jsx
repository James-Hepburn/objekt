import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 

import "./BlackPage.css";
import "./CommonStyles.css";
import "./Services.css";

export default function Services() {
  const navigate = useNavigate(); 
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <div className="other-pages service-page">
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
          <button className="nav-btn" onClick={() => navigate("/work")}>
            Work
          </button>
          <button className="nav-btn" onClick={() => navigate("/services")}>Services</button>
          <button className="nav-btn" onClick={() => navigate("/shop")}>
            Shop
          </button>
          <button className="nav-btn" onClick={() => navigate("/about")}>
            About
          </button>
          <button className="nav-btn" onClick={() => navigate("/contact")}>
            Contact
          </button>
        </div>
      </header>

      <main>
        <div className="content-container">
          <div className="box box1">
            <div className="box-inner">
              <h2>Services</h2>
              <div className="scroll-content">
                <p>
                  At C.HAUS Objekt, we offer design and product services that blend 
                  culture, creativity, and craftsmanship. Our work extends beyond 
                  traditional gifting; we create meaningful, story-driven designs that 
                  celebrate identity and connection.
                </p>

                <p className="list-title">We specialize in:</p>

                <ul>
                  <li>Custom Gift Design</li>
                  <li>Brand & Organization Design</li>
                  <li>Merchandise & Apparel</li>
                  <li>Print & Stationery Design</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="box box2">
              <img src="/T-shirts.png" alt="T-shirt Designs" />
            </div>
            <div className="merged-top"></div>
            <div className="merged-bottom"></div>
            <div className="middle-section">
              <div className="left-half">
                <div className="box box3"></div>
                <div className="bottom-row">
                  <button className="box box5-left box-link" onClick={() => navigate("/contact")}>
                    Contact
                  </button>
                  <button className="box box5-right box-link" onClick={() => navigate("/work")}>
                    Work
                  </button>
                </div>
              </div>
              <div className="box box4and6">
                <img src="/Business-Card.png" alt="Business Card Design" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="site-footer">
        <p>
          Questions?{" "}
          <button
            onClick={() => navigate("/contact")}
            className="contact-btn"
          >
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