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
  let totalCart = cart.map(item=> item.cantidad).reduce((a,b)=> a+b,0); //reduce(funcion, valor inicial)

  return (
    <div className='contenedor-nav'>
        <Logo/>
        <MenuItems/>
        {open 
        ? <button onClick={()=> setOpen(!open)} className="menu-items-btn"><FaTimes/></button> 
        : <button onClick={()=> setOpen(!open)} className="menu-items-btn"><FaBars/></button> }
        {open && <MenuItemsMobile/>}
        
     

    
    
            <Link to='/cart'>
              <button className='cartBtn'>Ver Carrito</button>
              <p className='listAmountResponse'>{totalCart}</p>
            </Link>
    <div className='contenedor-btn'>        
        <button className="shopOff" onClick={()=> setCartOpen(!cartOpen)}><FaShoppingCart/></button>
        <p className='listAmount shopOff'>{totalCart}</p>
        {cartOpen && 
        <div className='shopList-dropdown'>
            <ShopList games={cart}/>
        </div>
        }
      </div>

    </div>
  )
}

export default NavBar