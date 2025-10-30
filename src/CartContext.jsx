import React, { createContext, useContext, useEffect, useReducer } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const { id, name, price, image, quantity } = action.payload;

      const existing = state.items.find((item) => item.id === id);

      let newItems;
      if (existing) {
        newItems = state.items.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [
          ...state.items,
          { id, name, price, image, quantity },
        ];
      }

      return calculateTotals({ ...state, items: newItems });
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter((item) => item.id !== action.payload.id);
      return calculateTotals({ ...state, items: newItems });
    }

    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;

      let newItems;
      if (quantity <= 0) {
        newItems = state.items.filter((item) => item.id !== id);
      } else {
        newItems = state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
      }

      return calculateTotals({ ...state, items: newItems });
    }

    case "SET_CART": {
      return calculateTotals({
        ...state,
        items: action.payload.items || [],
      });
    }

    default:
      return state;
  }
}

function calculateTotals(state) {
  const totalQuantity = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = state.items.reduce((sum, item) => {
    const numericPrice = parseFloat(
      String(item.price).replace(/[^0-9.]/g, "")
    );
    return sum + numericPrice * item.quantity;
  }, 0);

  return {
    ...state,
    totalQuantity,
    totalPrice,
  };
}

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) {
        const parsed = JSON.parse(stored);
        dispatch({ type: "SET_CART", payload: parsed });
      }
    } catch (err) {
      console.error("Failed to parse cart from localStorage", err);
    }
  }, []);

  useEffect(() => {
    const dataToStore = {
      items: state.items,
    };
    localStorage.setItem("cart", JSON.stringify(dataToStore));
  }, [state.items]);

  const addToCart = ({ id, name, price, image, quantity }) => {
    dispatch({
      type: "ADD_ITEM",
      payload: { id, name, price, image, quantity },
    });
  };

  const removeFromCart = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id },
    });
  };

  const updateQuantity = (id, quantity) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, quantity },
    });
  };

  const value = {
    items: state.items,
    totalQuantity: state.totalQuantity,
    totalPrice: state.totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside <CartProvider />");
  }
  return ctx;
}