import React, { useState } from 'react';
import './Menu.css';
import { motion } from 'framer-motion';

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

const Menu = () => {
  const [cartMessage, setCartMessage] = useState('');
  
  const teaData = [
    {
      imgSrc: "https://images.pexels.com/photos/1872886/pexels-photo-1872886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Classic Chai",
      price: "25.60",
      description: "Chai Corner's Classic Chai offers a perfect blend of rich tea leaves and aromatic spices, delivering a comforting",
    },
    {
      imgSrc: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Green Tea",
      price: "30.00",
      description: "A refreshing blend of green tea leaves that rejuvenates your senses.delivering a comforting and authentic chai experience.",
    },
    {
      imgSrc: "https://images.pexels.com/photos/1362537/pexels-photo-1362537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Herbal Infusion",
      price: "28.50",
      description: "A soothing herbal infusion made with a blend of natural herbs.delivering a comforting and authentic chai experience.",
    },
    {
        imgSrc: "https://images.pexels.com/photos/734983/pexels-photo-734983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Black Lemon Tea",
        price: "58.66",
        description: "A soothing herbal infusion made with a blend of natural herbs.delivering a comforting and authentic chai experience.",
      },
      {
        imgSrc: "https://images.pexels.com/photos/8850651/pexels-photo-8850651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        name: "Herbal honey",
        price: "88.50",
        description: "A soothing herbal infusion made with a blend of natural herbs.delivering a comforting and authentic chai experience.",
      },
    // Add more tea items here as needed
  ];

  const handleAddToCart = (name) => {
    setCartMessage(`${name} added to cart!`);
    setTimeout(() => setCartMessage(''), 2000); // Clear message after 2 seconds
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="Menu">
        <h1 style={{paddingTop:"150px",textAlign:"center"}}>Try now!!</h1>
        {cartMessage && <div className="cart-message">{cartMessage}</div>}
        <div className="Herbal">
          <h2>Herbal Chai</h2>
          <div className="herbalteas">
            {teaData.map((tea, index) => (
              <TeaItem 
                key={index} 
                {...tea} 
                onAddToCart={() => handleAddToCart(tea.name)} 
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
