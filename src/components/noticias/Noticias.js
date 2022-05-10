import React from 'react'
import imagen from '../../assets/img/noticias.jpg'
import './noticias.css'

export const Noticias = () => {
  return (
    <>
    <div className='titulo'>
      <h1>NOTICIAS</h1>
      <div className='contenedor-noticia'>
        <div className= 'img'>
          <img className='img-noticia' src={ imagen } alt='imagen de videojuego Californication' />
        </div>  
        <div className='info-noticia'>
          <h1><span className='color-title'> CALIFORNICATION</span></h1>
          <h2>Finalmente es una realidad!</h2>
          <p>El juego es un proyecto de <a href="https://twitter.com/comandogdev" rel="noreferrer" target="_blank">Miquel Camps Orteza</a>, un desarrollador catalán que como muchos de los que crecimos viendo MTV en aquellos días, teníamos unas ganas muy fuertes de jugar aquel juego que aparecía en el vídeo. Sorprendido de que nadie lo hubiese hecho tantos años después, se propuso la meta él mismo. </p>
      </div>

        {/* <p className='parrafo2'>El resultado es <a href="https://comandogdev.itch.io/califonication">un pequeño juego creado en Unity que ha publicado en la plataforma itch.io</a> y que nos transporta al mundo del videoclip a través de siete niveles con diferentes mecánicas. Tienes la posibilidad de elegir entre cualquiera de los miembros de la banda como tu personaje a controlar.</p> */}

    </div>

    </div>
    <hr className='hr'/>
    </>
  )
}
