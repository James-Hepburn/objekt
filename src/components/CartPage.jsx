import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import "./BlackPage.css";
import "./CommonStyles.css";
import "./CartPage.css";

export default function CartPage() {
  const { items: cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    cardInfo: "",
    billingAddress: "",
    shippingAddress: "",
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const shipping = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + tax + shipping;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="other-pages cart-page">
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
          <div className="box box1">
            <h2>Products in Cart</h2>
            <ul className="cart-list">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <div className="cart-item-info">
                    <strong>{item.name}</strong>
                    <p>{item.price}</p>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="right-column">
            <div className="box box2">
              <h2>Personal Information</h2>
              <form className="cart-form">
                <label>
                  Full Name:
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Card Information:
                  <input
                    type="text"
                    name="cardInfo"
                    value={formData.cardInfo}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Billing Address:
                  <input
                    type="text"
                    name="billingAddress"
                    value={formData.billingAddress}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Shipping Address:
                  <input
                    type="text"
                    name="shippingAddress"
                    value={formData.shippingAddress}
                    onChange={handleChange}
                    required
                  />
                </label>
              </form>
            </div>
            <div className="merged-top"></div>
            <div className="merged-bottom"></div>
            <div className="middle-section">
              <div className="left-half">
                <div className="box box3">
                  <p>
                    If you have any questions or need help with your order, please contact us at
                    <br />
                    <strong>info@chausobjekt.com</strong>
                  </p>
                </div>
                <div className="bottom-row">
                  <button className="box box5-left box-link" onClick={() => navigate("/services")}>
                    Services
                  </button>
                  <button className="box box5-right box-link" onClick={() => navigate("/shop")}>
                    Shop
                  </button>
                </div>
              </div>
              <div className="box box4and6">
                <h2>Total Summary</h2>
                <p>Subtotal: ${subtotal.toFixed(2)}</p>
                <p>Tax (5%): ${tax.toFixed(2)}</p>
                <p>Shipping: ${shipping.toFixed(2)}</p>
                <hr />
                <h3>Total: ${total.toFixed(2)}</h3>
                <button>Place Order</button>
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