import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./BlackPage.css";
import "./CommonStyles.css";

export default function Work() {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const products = [
    {
      image: "/WEBSITE TSHIRTS-01.png",
      description: "This is the description for Product 1",
      price: "$10.00",
      info: "Name of Product 1",
    },
    {
      image: "/WEBSITE TSHIRTS-02.png",
      description: "This is the description for Product 2",
      price: "$20.00",
      info: "Name of Product 2",
    },
    {
      image: "/WEBSITE TSHIRTS-03.png",
      description: "This is the description for Product 3",
      price: "$30.00",
      info: "Name of Product 3",
    },
    {
      image: "/WEBSITE TSHIRTS-04.png",
      description: "This is the description for Product 4",
      price: "$40.00",
      info: "Name of Product 4",
    },
  ];

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
    alert(`Added ${quantity} of ${products[currentIndex].info}`);
    setQuantity(0);
  };

   const handleNext = () => {
    setCurrentIndex((i) => (i + 1) % products.length);
    setQuantity(0);
  };

  const handlePrev = () => {
    setCurrentIndex((i) => (i - 1 + products.length) % products.length);
    setQuantity(0);
  };

  const product = products[currentIndex];

  return (
    <div className="other-pages shop-page">
      {}
      <header className="home-header">
        <div className="left-nav">
          <div className="logo-placeholder" onClick={() => navigate("/home")}>
            <img src="Logo-Wide.png" alt="Logo" className="logo-image" />
          </div>
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
      <main>
        <div className="content-container">
          {}
          <div className="box box1">
            <button className="arrow left" onClick={handlePrev}>◀</button>

            <div
              className="product-image-container"
              onClick={() => setIsLightboxOpen(true)}
              style={{ cursor: "zoom-in" }}
            >
              <img
                src={product.image}
                alt={`Product ${currentIndex + 1}`}
                className="product-image"
              />
            </div>

            <button className="arrow right" onClick={handleNext}>▶</button>
          </div>

          {}
          <div className="right-column">
            <div className="box box2">
              <p>{product.description}</p>
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
                <h2>{product.price}</h2>
                <p>{product.info}</p>
                <button onClick={handleAdd}>Add</button>
              </div>
            </div>
          </div>
        </div>

        {isLightboxOpen && (
          <div
            className="lightbox-overlay"
            onClick={() => setIsLightboxOpen(false)}
          >
            <img
              src={product.image}
              alt={`Product ${currentIndex + 1}`}
              className="lightbox-image"
            />
          </div>
        )}
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

        <p>info@chausobjekt.com</p>

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