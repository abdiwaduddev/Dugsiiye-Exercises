// ShoppingCart.jsx
import { useState } from "react";

const Cart = () => {
  // Initialize state with an empty array for products
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  // Function to handle adding a new product
  const handleAddProduct = () => {
    if (productName.trim() !== "" && productPrice.trim() !== "") {
      const newProduct = {
        id: Date.now(), // Unique identifier
        name: productName.trim(),
        price: parseFloat(productPrice),
        quantity: 1,
      };
      // Update state immutably by creating a new array
      setProducts([...products, newProduct]);
      setProductName(""); // Clear input fields
      setProductPrice("");
    }
  };

  // Function to handle increasing quantity
  const increaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product,
    );
    setProducts(updatedProducts);
  };

  // Function to handle decreasing quantity
  const decreaseQuantity = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product,
    );
    setProducts(updatedProducts);
  };

  // Function to handle removing a product
  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  // Calculate total price
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  return (
    <div>
      <h2>Simple Shopping Cart</h2>
      <div>
        <h3>Add a Product</h3>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Product Name"
        />
        <input
          type="number"
          min="0"
          step="0.01"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          placeholder="Price"
        />
        <button onClick={handleAddProduct}>Add to Cart</button>
      </div>

      {products.length > 0 ? (
        <div>
          <h3>Products in Cart</h3>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <strong>{product.name}</strong> - ${product.price.toFixed(2)}
                <div>
                  Quantity:
                  <button onClick={() => decreaseQuantity(product.id)}>
                    -
                  </button>
                  {product.quantity}
                  <button onClick={() => increaseQuantity(product.id)}>
                    +
                  </button>
                </div>
                <button onClick={() => removeProduct(product.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
        </div>
      ) : (
        <p>The cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
