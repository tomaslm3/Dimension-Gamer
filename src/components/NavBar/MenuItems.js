
import React from 'react';
import {FaRegUser,FaSearch,FaShoppingCart} from "react-icons/fa";
 import './NavBar.css';

const MenuItems = () => {
  return (
 <>
 <div className='contenedor-menu'></div>
 <ul className='menu-items'>
 <li><a href='#'>INICIO</a></li>
 <li><a href='#'>CATALOGO</a></li>
 <li><a href='#'>OFERTAS</a></li>
 <li><a href='#'>CONTACTO</a></li>
 </ul>

 <div className='contenedor-btn'>
        <button><FaSearch/></button>
        <button><FaRegUser/></button>
        <button><FaShoppingCart/></button>
        </div>
 </>
  )
}

export default MenuItems