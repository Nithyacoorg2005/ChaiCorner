import React, { useState } from 'react';
import './Contact.css'; 
import { motion } from 'framer-motion';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! We have received your message.`);
    

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.8 }}
  >
    <div className="contact-container">
      <h1 className="contact-header">Get in Touch</h1>
      <p className="contact-subtext">We'd love to hear from you! Drop us a message below.</p>

      <div className="contact-form-container">
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <textarea 
            rows="4" 
            placeholder="Your Message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            required 
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="map-container">
        <h3>Our Location</h3>
        <img src="https://th.bing.com/th/id/OIP.jOD-XOqT2Ie5MtCk0Vv8LQHaDe?rs=1&pid=ImgDetMain" alt="Chai Corner Location" />
      </div>

      <div className="social-links">
        <h3>Follow Us</h3>
        <a style={{marginTop:"20px"}} href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </div>

      <footer class="site-footer">
    <p >&copy; 2024 Nithyashree CS. All Rights Reserved.</p>
</footer>
    </div>
    </motion.div>
  );
};

export default Contact;

