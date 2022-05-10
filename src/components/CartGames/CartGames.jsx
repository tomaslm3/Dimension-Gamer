import React from "react";
import CartGame from "../CartGame/CartGame";

function CartGames({ games }) {
    return (
        <div>
            {games && games.map(game => {
                return (
                    <CartGame 
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
    );
}

export default CartGames;