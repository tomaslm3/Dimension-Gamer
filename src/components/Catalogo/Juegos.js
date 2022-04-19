import React from 'react'
import Juego from "./Juego.jsx"

const Juegos = ({ juegos }) => {

  return (
    
      juegos.map( (juego, index ) => 
      {

        return (<Juego 
                  id = {index}
                  image = {juego.image}
                  title= {juego.data.title}
                  description= {juego.data.description}
                  discount= {juego.discount.discount}
                  />)
      

      }


      )
  )
    
  
}

export default Juegos