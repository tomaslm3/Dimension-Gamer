import React, { useState } from 'react'
import {FaRegUser,FaSearch,FaShoppingCart,FaBars} from "react-icons/fa";
import "./NavBarMobile.css"
import { Link } from 'react-router-dom';

const MenuItemsMobile = () => {

    

  return (
      <>
     
 <ul className='menu-items-mobile'>
     
 <li><a href='#'>INICIO</a></li>
 <li><Link to='/catalogo'>Catalogo</Link></li>
 <li><a href='#'>CATALOGO</a></li>
 <li><a href='#'>NOVEDADES</a></li>
 <li><a href='#'>OFERTAS</a></li>
 <li><a href='#'>FORO</a></li>
 <li><a href='#'>CONTACTO</a></li>
 
 </ul>
        </>
  )
}

export default MenuItemsMobile