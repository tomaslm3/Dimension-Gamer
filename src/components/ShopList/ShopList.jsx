import React from "react";
import { Link } from "react-router-dom";
import ShopListJuego from "../shopListJuegos/ShopListJuegos";

function ShopList({games}) {
    return (
        <div>
        <div className="containerShopList">
            {games && games.map(game => {
                return (
                    <ShopListJuego
                    key={game.id}
                    id={game.id}
                    title={game.data.title}
                    price={game.data.price}
                    image={game.image}
                    discount={game.discounts.discount}
                    percent={game.discounts.percent}
                    cantidad={game.cantidad}
                    />
                    );
                })}
        </div>
            <Link to='/cart'>
              <button className='cartBtn'>Ver Carrito</button>
            </Link>
        </div>
    );
}

export default ShopList;