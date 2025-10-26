import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

import "./BlackPage.css";
import "./CommonStyles.css";

export default function Home() {
  const navigate = useNavigate();

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
    <div className="other-pages">
      <header className="home-header">
        <div className="left-nav">
          <button className="nav-btn" onClick={() => navigate("/home")}>
            Home
          </button>
        </div>

        <button className="menu-toggle" id="menuToggle">
          ☰
        </button>

        <div className="right-nav" id="rightNav">
          <button className="nav-btn" onClick={() => navigate("/services")}>
            Services
          </button>
          <button className="nav-btn" onClick={() => navigate("/work")}>
            Work
          </button>
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
          <div className="box box1"></div>
          <div className="right-column">
            <div className="box box2"></div>
            <div className="merged-top"></div>
            <div className="merged-bottom"></div>
            <div className="middle-section">
              <div className="left-half">
                <div className="box box3"></div>
                <div className="bottom-row">
                  <div className="box box5-left"></div>
                  <div className="box box5-right"></div>
                </div>
              </div>
              <div className="box box4and6"></div>
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
        <p>Email: example@gmail.com</p>

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