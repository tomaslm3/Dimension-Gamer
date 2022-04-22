import React from 'react'
import Juego from "./Juego.jsx"




const Juegos = ({ juegos,setCart,cart }) => {
  
  return (

      juegos.map( (juego, index) => 
      {
        const {image,data,discounts} = juego;
        const {discount,percent}= discounts
        const {title,description} = data;

        return (<Juego 
                  id={index+1}
                  image = {image}
                  title= {title}
                  description= {description}
                  discount= {discount}
                  percent={percent}
                  cart={cart}
                  setCart={setCart}
                  juego={juego}
                  juegos={juegos}
                  />)
      

      }


      )
  )
    
  
}

export default Juegos