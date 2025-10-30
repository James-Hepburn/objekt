import React from "react";
import "./Modal.css";

export default function Modal({ title, message, onClose, onContinue, onGoToCart }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className="modal-buttons">
          <button className="continue-btn" onClick={onContinue}>Continue Shopping</button>
          <button className="cart-btn" onClick={onGoToCart}>Go to Cart</button>
        </div>
      </div>
    </div>
  );
}