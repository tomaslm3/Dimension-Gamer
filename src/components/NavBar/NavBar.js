import React from 'react';
import './NavBar.css';
import {FaRegUser,FaSearch,FaShoppingCart} from "react-icons/fa";
import Logo from './Logo';
import MenuItems from './MenuItems';

const NavBar = () => {
  return (
    <div className='contenedor-nav'>
        <Logo></Logo>
        <MenuItems></MenuItems>

        
    </div>
  )
}

export default NavBar