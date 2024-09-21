import React from 'react';
import './Cart.css'; // Make sure to create styles for the cart

const CartPage = ({ cartItems, setCartItems }) => {
  // Calculate the total price of the items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncrease = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity += 1;
    setCartItems(newCartItems);
  };

  const handleDecrease = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity -= 1;
      setCartItems(newCartItems);
    }
  };

  const handleDelete = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.imgSrc} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <h3>${item.price.toFixed(2)}</h3>
                <div className="quantity-controls">
                  <button onClick={() => handleDecrease(index)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrease(index)}>+</button>
                </div>
                <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))}
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
