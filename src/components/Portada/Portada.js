import React from 'react'
import portada from '../../assets/img/portada.jpg'
import '../../components/Portada/Portada.css'
const Portada = () => {
  return (
    <div className='portada'>
      <img src={portada}/>
        <div className='texto-portada'>
            <h3>¡BIENVENIDOS A DIMENSION GAMER!</h3>
            <p>Disfruta de los mejores juegos al mejor precio del mercado</p>
        </div>
    </div>
  )
}

export default Portada