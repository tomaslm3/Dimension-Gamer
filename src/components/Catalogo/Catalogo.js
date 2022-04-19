import React, { useContext } from 'react'
import { DataContext } from '../dataContext/DataContext.js';
// import Juego from "./Juego.jsx"
import Juegos from "./Juegos.js"


const Catalogo = () => {

  const juegos = useContext(DataContext);
  console.log(juegos)

  return (
    <div>
      <Juegos juegos={juegos}/>
    </div>
  )
}

export default Catalogo