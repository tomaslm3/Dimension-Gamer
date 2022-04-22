import React from 'react'
import Juego from '../Catalogo/Juego'

const Cart = ({cart,setCart,id}) => {
    const reloadCart =()=>{
        setCart([])
    }
  
  return (
    <div className='contenedor-cart'>
        <h1>Cart</h1>
        <div className='cart' >
            {cart.length === 0 ? (<p>0</p>): (cart.map(((juego)=>
            <Juego 
            key={id} 
            juego={juego} 
            cart={cart}
            setCart={setCart}
             />
         )))}
        </div>
        <button onClick={()=>reloadCart()}>VACIAR CARRITO</button>
    </div>
  )
}

export default Cart