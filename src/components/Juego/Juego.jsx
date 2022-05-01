import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";
import './Juego.css';

export default function Juego( { id, image, title, price, discount, percent } ) {
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
                    <p className="card-price">PRECIO: $ {price} </p>
                    <p className="card-discount">DESCUENTO : {discount ? percent : "-"} % </p>
                </div>
            </div>
            <div>
                <button onClick={() => handleAddToCart(id)} >Comprar</button>
            </div>
        </div>

    )

}