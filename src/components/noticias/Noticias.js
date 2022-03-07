import React from 'react'
import imagen from '../../assets/img/noticias.jpg'
import './noticias.css'

export const Noticias = () => {
  return (
    <div className='noticias'>


        <img className='imagen' src={ imagen } alt='imagen de videojuego Californication' />

        <h1 className='title'><span className='color-title'>El videojuego de Californication </span>finalmente es una realidad.</h1>

        <p className='parrafo1'>El juego es un proyecto de <a href="https://twitter.com/comandogdev" rel="noreferrer" target="_blank">Miquel Camps Orteza</a>, un desarrollador catalán que como muchos de los que crecimos viendo MTV en aquellos días, teníamos unas ganas muy fuertes de jugar aquel juego que aparecía en el vídeo. Sorprendido de que nadie lo hubiese hecho tantos años después, se propuso la meta él mismo. </p>

        {/* <p className='parrafo2'>El resultado es <a href="https://comandogdev.itch.io/califonication">un pequeño juego creado en Unity que ha publicado en la plataforma itch.io</a> y que nos transporta al mundo del videoclip a través de siete niveles con diferentes mecánicas. Tienes la posibilidad de elegir entre cualquiera de los miembros de la banda como tu personaje a controlar.</p> */}

    </div>
  )
}
