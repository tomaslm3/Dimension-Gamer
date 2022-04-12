import React from 'react';
import './NavBar.css';
import {FaRegUser,FaSearch,FaShoppingCart,FaBars} from "react-icons/fa";
import Logo from './Logo';
import MenuItems from './MenuItems';
import MenuItemsMobile from '../NavBarMobile/MenuItemsMobile';
import { useState } from 'react';

const NavBar = () => {
  const [open, setOpen ]= useState(false);

  return (
    <div className='contenedor-nav'>
        <Logo/>
        <MenuItems/>
        {open && <MenuItemsMobile/>}
        <div className='contenedor-btn'>

<button><FaShoppingCart/></button>
<button onClick={()=> setOpen(!open)} className="menu-items-btn"><FaBars/></button>
</div>

        
    </div>
  )
}

export default NavBar