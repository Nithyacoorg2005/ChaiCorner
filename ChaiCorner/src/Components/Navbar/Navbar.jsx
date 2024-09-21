import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from "../../images/image.png"
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.8 }}
  >
    <>
   <div className="navbar">
    <img src={logo} alt=""/>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Process">Process</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li><Link to="/MorePage">More</Link></li>
        <li><Link to="/Contact">Contact us</Link></li>
           </ul>
   </div>
      
    </>
    </motion.div>
  )
}

export default Navbar
