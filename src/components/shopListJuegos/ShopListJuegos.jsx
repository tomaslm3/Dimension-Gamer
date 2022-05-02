import React from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart, addToCart } from "../../redux/actions";
import "./ShopList.css"

function ShopListJuego({ id, title, price, image, discount, percent }) {
    const dispatch = useDispatch();

    function handleRemoveFromCart(id) {
        dispatch(deleteFromCart(id));
    }
    function handleAddToCart(id) {
        dispatch(addToCart(id));
    }
    return (
        <div className="container-shopList">
            <img src={image} alt={title} height={100} />
            <div className="shopList-info" key={id}>
                <div>
                    <h3>{title}</h3>
                    <p>PRICE: ${price} </p>
                    <p>DISCOUNT: {discount ? "YES": "NO"} </p>
                    <p>PERCENT: {percent ? percent+"%" : "0%"} </p>
                </div>
                <div className="shopList-btn">
                <button className="btnRemove" onClick={() => handleRemoveFromCart(id)}>x</button>
                <button className="btnAdd" onClick={() => handleAddToCart(id)}>+</button>
                </div>
                
            </div>
            
        </div>
    );

    
}


export default ShopListJuego;