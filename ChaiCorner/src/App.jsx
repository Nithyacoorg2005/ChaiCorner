import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Process from './Components/Process/Process';
import Menu from './Components/Menu/Menu';
import MorePage from './Components/More/MorePage';
import Contact from './Components/Contact/Contact';
import CartPage from './Components/Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);
    if (existingItemIndex > -1) {
      handleIncrease(existingItemIndex); // Increase quantity if item already exists
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]); // Add new item with quantity 1
    }
  };

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
    } else {
      handleRemove(index);
    }
  };

  const handleRemove = (index) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Process" element={<Process />} />
        <Route path="/Menu" element={<Menu handleAddToCart={handleAddToCart} />} />
        <Route path="/MorePage" element={<MorePage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route 
          path="/cart" 
          element={<CartPage cartItems={cartItems} handleIncrease={handleIncrease} handleDecrease={handleDecrease} handleRemove={handleRemove} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
