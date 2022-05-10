import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";
import './Juego.css';

export default function Juego( { id, image, title, price, discount, percent } ) {
    console.log(id);
    const dispatch = useDispatch();

    function handleAddToCart(id) {
        dispatch(addToCart(id));
    }

    return(
        <div className="card">
            <div key={id}>
                <img src={image} alt={title} className="card-image"/>
                <div className="card-info">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-price">PRICE: $ {price} </p>
                    <p className="card-discount">DISCOUNT : {discount ? percent+"%" : "NO"}  </p>
                </div>
            </div>
            <div className="card-button">
                <button onClick={() => handleAddToCart(id)} >ADD TO CART</button>
            </div>
        </div>

    )

}