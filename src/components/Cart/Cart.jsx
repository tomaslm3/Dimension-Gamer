import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fethCart } from "../../redux/actions";
import CartGames from "../CartGames/CartGames";
import { resetCart} from "../../redux/actions";
import {ConfirmCompra} from "../confirmCompra/ConfirmCompra";
import "./Cart.css"

function Cart({id}){
  const dispatch = useDispatch();
  const games = useSelector(state => state.cart);
  const [confirm,setConfirm]= useState(false);
  const cart = useSelector(state => state.cart);
  let totalPrice = cart.reduce((total, game) => total + game.data.price * game.cantidad, 0);

  useEffect(() => {
    dispatch(fethCart());
  }, [dispatch]);

 const cleanCart=()=>{
   dispatch(resetCart())
 }

 const confirmCompra = () => {
   setConfirm( !confirm );
   console.log(confirm);
 }

    
  return(
    <>
     
      {games.length > 0 
      ?
      <div className="cartContent">
         <p className="shopTitle">CARRITO DE COMPRAS</p>
        <CartGames games={games} />
        <div className="cartButtons">
        <button className="buttonRemove" onClick={()=>cleanCart()}>REMOVE ALL</button>
        <button onClick={()=>confirmCompra()}>CONFIRM</button>
        </div>
        {confirm && 
        <ConfirmCompra setConfirm = {setConfirm}/>
        }
      
        <p className="ValueCart">TOTAL: $ {totalPrice}</p>
      </div> 
      : 
       <p className="noGames">No games in cart</p>
        
      }
      <div>
        
      </div>
    </>
  )
}

export default Cart;