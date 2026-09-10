// CartSummary.jsx
import React, { useContext } from "react";
import CartContext from "./CartContext";

function CartSummary() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {cartItems.length}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}{" "}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartSummary;
