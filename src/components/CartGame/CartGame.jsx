import React from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../../redux/actions";

function CartGame({ id, title, price, image, discount, percent }) {
    const dispatch = useDispatch();

    function handleRemoveFromCart(id) {
        dispatch(deleteFromCart(id));
    }

    return (
        <div>
            <img src={image} alt={title} height={100}/>
            <div key={id}>
                <h3>{title}</h3>
                <p>PRICE: {price} </p>
                <p>DISCOUNT: {discount} </p>
                <p>PERCENT: {percent} </p>
            </div>

            <button onClick={() => handleRemoveFromCart(id)}>Remove</button>
        </div>
    );
}

export default CartGame;