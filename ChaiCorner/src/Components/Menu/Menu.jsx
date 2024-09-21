import React, { useState } from 'react';
import './Menu.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import for navigation

// Reusable TeaItem component
const TeaItem = ({ imgSrc, name, price, description, onAddToCart }) => {
  return (
    <div className="herbb">
      <img style={{ marginLeft: "40px", width: "250px", marginTop: "10px" }} src={imgSrc} alt={name} />
      <h2 style={{ padding: "20px" }}>{name}</h2>
      <h3 style={{ marginLeft: "20px", marginTop: "-10px" }}>${price}</h3>
      <p style={{ marginLeft: "20px", marginTop: "10px" }}>{description}</p>
      <button
        style={{
          backgroundColor: "grey",
          color: "white",
          border: "none",
          outline: "0",
          borderRadius: "10px",
          width: "100px",
          height: "30px",
          fontSize: "15px",
          margin: "15px",
        }}
        onClick={onAddToCart}
      >
        Buy now
      </button>
    </div>
  );
};

const Menu = ({ handleAddToCart }) => {
  const [cartMessage, setCartMessage] = useState('');
  const navigate = useNavigate(); // For navigating to the cart page

  const teaData = [
    {
      imgSrc: "https://images.pexels.com/photos/1872886/pexels-photo-1872886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Classic Chai",
      price: 25.60,
      description: "Chai Corner's Classic Chai offers a perfect blend of rich tea leaves and aromatic spices, delivering a comforting chai experience.",
    },
    {
      imgSrc: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Green Tea",
      price: 30.00,
      description: "A refreshing blend of green tea leaves that rejuvenates your senses.",
    },
    {
      imgSrc: "https://images.pexels.com/photos/1362537/pexels-photo-1362537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Herbal Infusion",
      price: 28.50,
      description: "A soothing herbal infusion made with a blend of natural herbs.",
    },
    {
      imgSrc: "https://images.pexels.com/photos/734983/pexels-photo-734983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Black Lemon Tea",
      price: 58.66,
      description: "A tangy, rich black tea with a touch of lemon.",
    },
    // Add more tea items here as needed
  ];

  const handleBuyNow = (tea) => {
    handleAddToCart(tea); // Add item to the cart
    setCartMessage(`${tea.name} added to cart!`);
    setTimeout(() => {
      setCartMessage('');
      navigate('/cart'); // Navigate to Cart page after adding to cart
    }, 1000); // Delay for cart message display
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="Menu">
        <h1 style={{ paddingTop: "100px", textAlign: "center" }}>Try now!!</h1>
        {cartMessage && <div className="cart-message">{cartMessage}</div>}
        <div className="Herbal">
          <h2 style={{ fontSize: "30px" }}>Herbal Chai</h2>
          <div className="herbalteas">
            {teaData.map((tea, index) => (
              <TeaItem
                key={index}
                {...tea}
                onAddToCart={() => handleBuyNow(tea)} // Call handleBuyNow when 'Buy now' is clicked
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
