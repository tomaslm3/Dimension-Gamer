import React from 'react';
import {FaRegUser,FaSearch,FaShoppingCart,FaBars} from "react-icons/fa";
 import './NavBar.css';
 import "../Catalogo/Catalogo"
 import { Link } from 'react-router-dom';

const MenuItems = () => {

  return (
 <>

 <ul className='menu-items'>
 {/* <li><a href='#'>INICIO</a></li> */}
 <li><Link to='/'>INICIO</Link></li>
 <li><Link to='/catalogo'>CATALOGO</Link></li>
 {/* <li><a href='/catalogo'>CATALOGO</a></li> */}
 <li><a href='#'>NOVEDADES</a></li>
 <li><a href='#'>OFERTAS</a></li>
 <li><a href='#'>FORO</a></li>
 <li><a href='#'>CONTACTO</a></li>
 
 </ul>
 </>
  )
}

export default MenuItems