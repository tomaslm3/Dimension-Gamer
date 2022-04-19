import React from "react";

export default function Juego({id,image,title,description,discount,precio = '$2pe'}) {
    return(
        <div className="card">
            <div key={id}>
                <img src={image} alt="ImagenJuego" className="card-image"/>
                <div className="card-info">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-info">{description}</p>
                    <p className="card-info">{ precio ? precio : 'Aca va el precio'} </p>
                </div>
            </div>

        </div>
    )
}