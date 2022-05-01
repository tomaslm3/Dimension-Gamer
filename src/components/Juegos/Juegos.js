import React from 'react'
import Juego from "../Juego/Juego.jsx"
import './Juegos.css'

const Juegos = ({ games }) => {
  console.log(games)
  return (
    <div className='container-juegos'>
      {games && games.map((game)=>{
        return(
          <Juego
          key={game.id}
          id={game.id}
          image = {game.image}
          title= {game.data.title}
          description= {game.data.description}
          price= {game.data.price}
          discount= {game.discounts.discount}
          percent={game.discounts.percent}
          />
        )
      }
    )}
    </div>
  )
    
  
}

export default Juegos