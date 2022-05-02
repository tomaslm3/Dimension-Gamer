import React from 'react';
import './NavBar.css';
import {FaTimes,FaShoppingCart,FaBars} from "react-icons/fa";
import Logo from './Logo';
import MenuItems from './MenuItems';
import MenuItemsMobile from '../NavBarMobile/MenuItemsMobile';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShopList from '../ShopList/ShopList';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const [open, setOpen ]= useState(false);
  const [cartOpen, setCartOpen ]= useState(false);
  const cart = useSelector(state => state.cart);

  return (
    <div className='contenedor-nav'>
        <Logo/>
        <MenuItems/>
        {open 
        ? <button onClick={()=> setOpen(!open)} className="menu-items-btn"><FaTimes/></button> 
        : <button onClick={()=> setOpen(!open)} className="menu-items-btn"><FaBars/></button> }
        {open && <MenuItemsMobile/>}
        
     

    
    
    <div className='contenedor-btn'>        
        <button onClick={()=> setCartOpen(!cartOpen)}><FaShoppingCart/></button>
        <p className='listAmount'>{cart.length}</p>
        <div className='shopList-dropdown'>
            {cartOpen && <ShopList games={cart}/>}
            <Link to='/cart'>
              <button className='cartBtn'>Ver Carrito</button>
            </Link>
        </div>
      </div>

    </div>
  )
}

export default NavBar