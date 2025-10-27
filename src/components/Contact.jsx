import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./BlackPage.css";
import "./CommonStyles.css";

import mapImg from "/map.png";
import emailIcon from "/email.png";
import phoneIcon from "/phone.png";

export default function Contact() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Backend integration coming soon)");
  };

  return (
    <div className="other-pages contact-page">
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

      <main style={{ height: "100vh" }}>
        <div className="content-container">
          {}
          <div className="box box1">
            <form onSubmit={handleSubmit}>
              <h2>Contact Form</h2>

              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />

              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(123) 456-7890"
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message..."
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>

          {}
          <div className="right-column">
            <div className="box box2">
              <h2>Socials</h2>
              <p>Email: example@gmail.com</p>
              <p>Instagram: exampleUsername</p>
              <p>Facebook: examplePage</p>
            </div>

            <div className="merged-top"></div>
            <div className="merged-bottom"></div>

            <div className="middle-section">
              <div className="left-half">
                <div className="box box3">
                  <img src={mapImg} alt="Map" />
                </div>

                <div className="bottom-row">
                    <a href="mailto:example@gmail.com" class="box box5-left box-link">
                    <img src={emailIcon} alt="Email" />
                    </a>

                    <a href="tel:+1234567890" class="box box5-right box-link">
                    <img src={phoneIcon} alt="Call" />
                    </a>
                </div>
              </div>

              <div className="box box4and6">
                <h2>Address</h2>
                <p>123 Example Street,</p>
                <p>Toronto, ON, M1A 2B3,</p>
                <p>Canada</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {}
      <footer className="site-footer">
        <div className="footer-contact">
          <p>Questions?</p>
          <button onClick={() => navigate("/contact")} className="contact-btn">
            Contact us
          </button>
        </div>

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