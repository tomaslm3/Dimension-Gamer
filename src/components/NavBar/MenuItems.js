import React from 'react';
import {FaRegUser,FaSearch,FaShoppingCart,FaBars} from "react-icons/fa";
 import './NavBar.css';

const MenuItems = () => {

    const mostrarMenu = (e) =>{
      
    }


  return (
 <>
 <div className='contenedor-menu'></div>
 <ul className='menu-items'>
 <li><a href='#'>INICIO</a></li>
 <li><a href='#'>CATALOGO</a></li>
 <li><a href='#'>NOVEDADES</a></li>
 <li><a href='#'>OFERTAS</a></li>
 <li><a href='#'>FORO</a></li>
 <li><a href='#'>CONTACTO</a></li>
 
 </ul>

 <div className='contenedor-btn'>

        <button><FaShoppingCart/></button>
        <button onClick={mostrarMenu} className="menu-items-btn"><FaBars/></button>
        </div>
 </>
  )
}

export default MenuItems