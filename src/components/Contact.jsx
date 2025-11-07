import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlackPage.css";
import "./CommonStyles.css";
import emailIcon from "/email.png";
import phoneIcon from "/phone.png";

export default function Contact() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [error, setError] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      setShowOverlay(true);
      e.target.reset();
    } else {
      setError(true);
    }
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
          <button className="nav-btn" onClick={() => navigate("/services")}>
            Services
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
          <div className="box box1">
            <form onSubmit={handleSubmit}>
              <h2>Contact Form</h2>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Full Name" required />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Email" required />
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Phone" />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Your message here..." required></textarea>
              <button type="submit">Submit</button>
            </form>
            {showOverlay && (
              <div className="overlay">
                <div className="overlay-box">
                  <p>Message sent successfully!</p>
                  <button onClick={() => setShowOverlay(false)}>Close</button>
                </div>
              </div>
            )}
            {error && (
              <div className="overlay">
                <div className="overlay-box">
                  <p>Failed to send message. Please try again later.</p>
                  <button onClick={() => setError(false)}>Close</button>
                </div>
              </div>
            )}
          </div>
          <div className="right-column">
            <div className="box box2">
              <img src="/Logo-Motto.png" alt="Logo and Motto" />
            </div>
            <div className="merged-top">
              <h2>Socials</h2>
              <p>info@chausobjekt.com</p>
              <p>instagramUsername</p>
              <p>facebookPage</p>
            </div>
            <div className="merged-bottom">
              <img src="/Logo-Motto-Tall.png" alt="Logo and Motto" />
            </div>
            <div className="middle-section">
              <div className="left-half">
                <div className="box box3">
                  <h4>Follow us for more surprises!</h4>
                </div>
                <div className="bottom-row">
                  <a href="mailto:info@chausobjekt.com" className="box box5-left box-link">
                    <img src={emailIcon} alt="Email" />
                  </a>
                  <a href="tel:+1234567890" className="box box5-right box-link">
                    <img src={phoneIcon} alt="Call" />
                  </a>
                </div>
              </div>
              <div className="box box4and6">
                <h2>Socials</h2>
                <p>Email: info@chausobjekt.com</p>
                <p>Instagram: exampleUsername</p>
                <p>Facebook: examplePage</p>
              </div>
            </div>
          </div>
        </div>
      </main>
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