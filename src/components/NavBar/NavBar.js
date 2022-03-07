import React from 'react';
import './NavBar.css';
import {FaRegUser,FaSearch,FaShoppingCart} from "react-icons/fa";
import Logo from './Logo/Logo';
import MenuItems from './MenuItems/MenuItems';

const NavBar = () => {
  return (
    <div className='contenedor-nav'>
        <Logo></Logo>
        <MenuItems></MenuItems>
        <div className='contenedor-btn'>
        <button><FaSearch/></button>
        <button><FaRegUser/></button>
        <button><FaShoppingCart/></button>
        </div>
    </div>
  )
}

export default NavBar