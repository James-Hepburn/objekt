import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BlackPage.css";
import "./CommonStyles.css";

export default function About() {
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
    <div className="other-pages about-page">
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
          <button className="nav-btn" onClick={() => navigate("/work")}>Work</button>
          <button className="nav-btn" onClick={() => navigate("/services")}>Services</button>
          <button className="nav-btn" onClick={() => navigate("/shop")}>Shop</button>
          <button className="nav-btn" onClick={() => navigate("/about")}>About</button>
          <button className="nav-btn" onClick={() => navigate("/contact")}>Contact</button>
        </div>
      </header>

      <main>
        <div className="content-container">
          <div className="box box1">
            <div className="box-inner">
              <h2>Our Story</h2>
              <div className="scroll-content">
                <p>
                  At C.HAUS Objekt, we believe that the most meaningful gifts tell a story. Rooted in culture and crafted with intention, our pieces are designed to celebrate tradition, artistry, and connection. Each object is more than a product, it’s a reflection of heritage, design, and heart.
                  <br /><br />
                  We specialize in creating one-of-a-kind gifts that fuse cultural inspiration with thoughtful craftsmanship. From the materials we use to the stories behind each design, every detail is considered to ensure you’re giving something truly unique and personal.
                  <br /><br />
                  In addition to our curated collection, we collaborate with organizations and companies to design custom cultural and brand-centered products that reflect their values, foster community, and strengthen company culture through meaningful design.
                  <br /><br />
                  C.HAUS Objekt is where culture meets creativity, bringing you objects of meaning for every occasion, from personal milestones to collective celebrations.
                </p>
              </div>
            </div>
          </div>

          <div className="right-column">
            <div className="box box2">
              <div className="box-inner">
                <h2>Mission Story</h2>
                <div className="scroll-content">
                  <p>
                    Florus ventorum vagus per verba inanissima fluit, dum sonus
                    levitatis circumvolvitur in aere vacuo. Nihil de nihilo
                    loquitur, et tamen verba manent, quasi sensum aliquem
                    simulantia. Umbrae sententiarum sine mente ludunt,
                    saltantes inter syllabas otiosas. Ita textus procedit, nec
                    finem nec initium quaerens, sed in perpetuum de rebus nullis
                    garriens.
                  </p>
                </div>
              </div>
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
                  <button className="box box5-right box-link" onClick={() => navigate("/shop")}>
                    Shop
                  </button>
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