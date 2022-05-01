import React from "react";
import ShopListJuego from "../shopListJuegos/ShopListJuegos";

function ShopList({games}) {
    return (
        <div>
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
                    />
                );
            })}
        </div>
    );
}

export default ShopList;