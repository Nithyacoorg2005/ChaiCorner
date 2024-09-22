import React, { useState } from 'react';
import './Menu.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate(); 


  const teaData = [
    {
      imgSrc: "https://images.pexels.com/photos/1872886/pexels-photo-1872886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Classic Chai",
      price: 25.60,
      description: "Chai Corner's Classic Chai offers a perfect blend of rich tea leaves and aromatic spices.",
    },
    {
      imgSrc: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Green Tea",
      price: 30.00,
      description: "A refreshing blend of green tea leaves that rejuvenates your senses.",
    },
    {
      imgSrc: "https://images.pexels.com/photos/4487510/pexels-photo-4487510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: " Brewing Herbal  Tea",
      price: 85.67,
      description: "A refreshing blend of green tea leaves that rejuvenates your senses.",
    },
    {
      imgSrc: "https://images.pexels.com/photos/374000/pexels-photo-374000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Ginger Tea",
      price: 75.00,
      description: "A refreshing blend of green tea leaves that rejuvenates your senses.",
    },
    {
      imgSrc: "https://images.pexels.com/photos/1298613/pexels-photo-1298613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Strong Base Tea",
      price: 350.00,
      description: "A refreshing blend of green tea leaves that rejuvenates your senses.",
    },
    {
      imgSrc: "https://images.pexels.com/photos/5946637/pexels-photo-5946637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Black Tea",
      price: 86.00,
      description: "A refreshing blend of green tea leaves that rejuvenates your senses.",
    },
    {
      imgSrc: "https://images.pexels.com/photos/4552171/pexels-photo-4552171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: " Herbal Green Tea",
      price: 75.00,
      description: "A refreshing blend of green tea leaves that rejuvenates your senses.",
    },
    {
      imgSrc: "https://images.pexels.com/photos/298853/pexels-photo-298853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Steam Tea",
      price: 80.00,
      description: "A refreshing blend of green tea leaves that rejuvenates your senses.",
    },

  ];

  const handleBuyNow = (tea) => {
    handleAddToCart(tea); 
    setCartMessage(`${tea.name} added to cart!`);
    setTimeout(() => {
      setCartMessage('');
      navigate('/cart'); 
    }, 1000); 
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
                onAddToCart={() => handleBuyNow(tea)} 
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
