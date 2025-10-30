import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "./CartIcon.css";

export default function CartIcon() {
  const navigate = useNavigate();
  const { totalQuantity } = useCart();

  if (totalQuantity === 0) return null; 

  return (
    <div
      className="cart-icon-container"
      onClick={() => navigate("/cart")}
      title="View Cart"
    >
      <div className="cart-icon" onClick={() => navigate("/cart")} title="View Cart">
        <i className="fa-solid fa-cart-shopping"></i>
        {totalQuantity > 0 && (
          <div className="cart-count">{totalQuantity}</div>
        )}
      </div>
    </div>
  );
}