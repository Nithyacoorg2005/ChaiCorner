import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Process from './Components/Process/Process';
import Contact from './Components/Contact/Contact';
import Menu from './Components/Menu/Menu';
import MorePage from './Components/More/MorePage';
import CartPage from './Components/Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]); // Add the new item to the cart
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/process" element={<Process />} />
          <Route path="/menu" element={<Menu handleAddToCart={handleAddToCart} />} />
          <Route path="/more" element={<MorePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
