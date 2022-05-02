import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fethCart } from "../../redux/actions";
import CartGames from "../CartGames/CartGames";
import { resetCart} from "../../redux/actions";
import "./Cart.css"

function Cart({id}){
  const dispatch = useDispatch();
  const games = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fethCart());
  }, [dispatch]);

 const cleanCart=()=>{
   dispatch(resetCart())
 }
  return(
    <>
     
      {games.length > 0 
      ?
      <div className="cartContent">
         <p className="shopTitle">CARRITO DE COMPRAS</p>
        <CartGames games={games} />
        <button onClick={()=>cleanCart()}>REMOVE ALL</button>
        <p className="ValueCart">TOTAL: $</p>
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