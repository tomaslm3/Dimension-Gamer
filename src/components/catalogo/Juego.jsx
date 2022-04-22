import React from "react";

export default function Juego({id,setCart,cart,juego,juegos}) {

    const {image,data,discounts}=juego;
    let cantidad = 0;
    //Funcion Agregar al Carrito
    console.log(juegos)
    const addGame = (id) =>{
    const game = juegos.filter((juego,index)=> (index+1)=== id);
    setCart([...cart,...game] )
    }

    // Funcion Eliminar del Carrito
    
    const deleteGame = () =>{
    const game =  cart.filter((juego,index)=> (index+1) === id);
    setCart([game])
    }
    
    console.log(cart)
    
    
    return(
        <div className="card">
            <div key={id}>
                <img src={image} alt={data.title} className="card-image"/>
                <div className="card-info">
                    <h3 className="card-title">{data.title}</h3>
                    <p className="card-text">PRECIO: $ { (discounts.percent+100) } </p>
                    <p className="card-text">DESCUENTO : {discounts.discount ? discounts.percent : "-"} % </p>
                </div>
            </div>
            {
                juegos ? (<button onClick={()=>addGame(id)}>Agregar al Carrito</button>) :
                (<div className="contenedor-btn-game">
                <button onClick={()=>deleteGame(id)}>Eliminar</button>
                <br />
                <button onClick={()=>addGame(id)}>Agregar</button>
                </div>)
            }
            
        </div>
    )

}