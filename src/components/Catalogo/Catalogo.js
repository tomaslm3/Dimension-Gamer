import React, { useContext,useState } from 'react'
import { DataContext } from '../dataContext/DataContext.js';
// import Juego from "./Juego.jsx"
import Juegos from "./Juegos.js"
import "./Catalogo.css"
import Cart from '../ShoppingCart/Cart.js';
import {cart,setCart} from "../ShoppingCart/Cart"

const Catalogo = ({index}) => {

  const juegos = useContext(DataContext);

  const [cart, setCart] = useState([]);
  
  return (
    <div className='container-juegos'>
      <Juegos juegos={juegos} cart={cart} setCart={setCart}/>
      <Cart 
      cart={cart}
      setCart={setCart}
      juegos={juegos}
      
    />
    </div>
  )
}

export default Catalogo