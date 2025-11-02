import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlackPage.css";
import "./CommonStyles.css";

import emailIcon from "/email.png";
import phoneIcon from "/phone.png";

export default function Contact() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (Backend integration coming soon)");
  };

  return (
    <div className="other-pages contact-page">
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
          {}
          <div className="box box1">
            <form onSubmit={handleSubmit}>
              <h2>Contact Form</h2>

              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full Name"
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />

              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message here..."
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>

          {}
          <div className="right-column">
            <div className="box box2">
              <h2>Socials</h2>
              <p>Email: info@chausobjekt.com</p>
              <p>Instagram: exampleUsername</p>
              <p>Facebook: examplePage</p>
            </div>

            <div className="merged-top">
              <h2>Socials</h2>
              <p>info@chausobjekt.com</p>
              <p>instagramUsername</p>
              <p>facebookPage</p>
            </div>
            <div className="merged-bottom"></div>

            <div className="middle-section">
              <div className="left-half">
                <div className="box box3"></div>

                <div className="bottom-row">
                    <a href="mailto:info@chausobjekt.com" class="box box5-left box-link">
                    <img src={emailIcon} alt="Email" />
                    </a>

                    <a href="tel:+1234567890" class="box box5-right box-link">
                    <img src={phoneIcon} alt="Call" />
                    </a>
                </div>
              </div>

              <div className="box box4and6"></div>
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