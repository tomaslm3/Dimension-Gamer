import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fethCart } from "../../redux/actions";
import CartGames from "../CartGames/CartGames";

function Cart(){
  const dispatch = useDispatch();
  const games = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fethCart());
  }, [dispatch]);

  return(
    <div className="cart">
      {games.length > 0 ?
      <div>
        <CartGames games={games} />
      </div> : 
       <p className="noGames">No games in cart</p>
      
      }

    </div>
  )
}

export default Cart;