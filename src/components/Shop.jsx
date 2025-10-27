import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./BlackPage.css";
import "./CommonStyles.css";

export default function Work() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const menuToggle = document.getElementById("menuToggle");
    const rightNav = document.getElementById("rightNav");

    if (!menuToggle || !rightNav) return;

    const handleClick = () => {
      rightNav.classList.toggle("open");
      menuToggle.textContent = rightNav.classList.contains("open") ? "✕" : "☰";
    };

    menuToggle.addEventListener("click", handleClick);
    return () => menuToggle.removeEventListener("click", handleClick);
  }, []);

  const handleMinus = () => {
    setQuantity((q) => (q > 0 ? q - 1 : 0));
  };

  const handlePlus = () => {
    setQuantity((q) => q + 1);
  };

  const handleAdd = () => {
    alert(`Added ${quantity} item(s).`);
  };

  return (
    <div className="other-pages shop-page">
      {}
      <header className="home-header">
        <div className="left-nav">
          <div className="logo-placeholder" onClick={() => navigate("/home")}></div>
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

      {}
      <main style={{ height: "100vh" }}>
        <div className="content-container">
          {}
          <div className="box box1"></div>

          {}
          <div className="right-column">
            <div className="box box2">
              <p>
                Florus ventorum vagus per verba inanissima fluit, dum sonus
                levitatis circumvolvitur in aere vacuo. Nihil de nihilo
                loquitur, et tamen verba manent, quasi sensum aliquem
                simulantia. Umbrae sententiarum sine mente ludunt, saltantes
                inter syllabas otiosas. Ita textus procedit, nec finem nec
                initium quaerens, sed in perpetuum de rebus nullis garriens.
              </p>
            </div>

            <div className="merged-top"></div>
            <div className="merged-bottom"></div>

            <div className="middle-section">
              <div className="left-half">
                <div className="box box3">
                  <h2>Quantity</h2>
                  <p>{quantity}</p>
                </div>

                <div className="bottom-row">
                  <div className="box box5-left" onClick={handleMinus}>
                    <span>-</span>
                </div>
                <div className="box box5-right" onClick={handlePlus}>
                    <span>+</span>
                </div>
                </div>
              </div>

              <div className="box box4and6">
                <h2>$$$</h2>
                <p>
                  Florus ventorum vagus per verba inanissima fluit, dum sonus
                  levitatis circumvolvitur in aere vacuo. Nihil de nihilo
                  loquitur, et tamen verba manent, quasi sensum aliquem
                  simulantia.
                </p>
                <button onClick={handleAdd}>Add</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {}
      <footer className="site-footer">
        <p>
          Questions?{" "}
          <button
            className="contact-btn"
            onClick={() => navigate("/contact")}
          >
            Contact us
          </button>
        </p>

        <p>Email: example@gmail.com</p>

        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}