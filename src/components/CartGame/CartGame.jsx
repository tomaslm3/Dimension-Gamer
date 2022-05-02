import React from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart,addToCart } from "../../redux/actions";
import "../Cart/Cart.css"

function CartGame({ id, title, price, image, discount, percent}) {
    const dispatch = useDispatch();

    function handleRemoveFromCart(id) {
        dispatch(deleteFromCart(id));
    }
    function handleAddtoCart(id){
        dispatch(addToCart(id))
    }
    return (
        <div className="shoppingCard">
            <img src={image} alt={title} height={100}/>
            <div key={id}>
                <h3>{title}</h3>
                <p>PRICE: ${price} </p>
                <p>DISCOUNT: {discount ? "YES" : "NO"} </p>
                <p>PERCENT: {percent ? percent+"%" : "-"} </p>
            </div>
            <div className="containerButtonsCart">
            <button className="btnRemove" onClick={() => handleRemoveFromCart(id)}>-</button>
            <button className="btnAdd" onClick={() => handleAddtoCart(id)}>+</button>
            </div>

        </div>
    );
}

export default CartGame;