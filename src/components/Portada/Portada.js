import React from 'react'
import portada from '../../assets/img/portada.jpg'
import '../../components/Portada/Portada.css'
const Portada = () => {
  return (
    <div className='portada'>
      <img src={portada}/>
        <div className='texto-portada portada-h3'>
            <h1>¡BIENVENIDOS A DIMENSION GAMER!</h1>
        </div>
        <div className='texto-portada portada-p'>
            <h2>Disfruta de los mejores juegos al mejor precio del mercado</h2>

        </div>
        <hr className='hr'/>
    </div>
  )
}

export default Portada