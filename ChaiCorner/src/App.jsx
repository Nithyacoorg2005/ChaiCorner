import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Process from './Components/Process/Process'
import Contact from './Components/Contact/Contact'
import Menu from './Components/Menu/Menu'
import MorePage from './Components/More/MorePage'
import CartPage from './Components/Cart/Cart'
import {BrowserRouter,Route,Routes} from 'react-router-dom'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Process" element={<Process/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/MorePage" element={<MorePage/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Cart" element={<CartPage/>}/>
        </Routes>
     
    </BrowserRouter>
    </>
  )
}

export default App
