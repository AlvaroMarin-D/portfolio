import React from 'react'
import './nav.css'
import {BiHome,BiUser,BiBook,BiGridAlt,BiMessageDetail} from 'react-icons/bi';
import { useState } from 'react';


const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#header" onClick={()=> setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}>
          <BiHome/> </a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} > 
          <BiUser/> </a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}> 
          <BiBook/> </a>
      <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}> 
          <BiGridAlt/> </a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> 
          <BiMessageDetail/> </a>
    </nav>
  )
}

export default Nav