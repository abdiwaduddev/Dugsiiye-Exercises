// App.jsx
import { useState } from "react";
import CartContext from "./CartContext";
import ProductItem from "./ProductItem";
import CartSummary from "./CartSummary";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const value = { cartItems, addToCart, removeFromCart };

  return (
    <CartContext.Provider value={value}>
      <ProductItem itemId={1} itemName="Keyboard" price={10} />
      <ProductItem itemId={2} itemName="Mouse" price={5} />
      <CartSummary />
    </CartContext.Provider>
  );
}

export default App;
