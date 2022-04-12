import React from 'react';
import "../Footer/Footer.css"
import logo from "../NavBar/media/logo.jpg"
import {FaTwitch,FaFacebook,FaTwitter,FaInstagram} from "react-icons/fa";


const Footer = () => {
  return (
    <div className='contenedor-footer'>
        <div className='contenedor-comunidad'>
       <div className='logo-comunidad'>
            <img src={logo}/>
            </div>
        <div className='publicidad-comunidad'>
            <h1 className='titulo-publicidad'> COMUNIDAD DIMENSION GAMER!</h1>
             <h3>¡UNETE A NUESTRA COMUNIDAD!</h3>
             <button>DESCUBRE MAS!</button>
            
            </div>     
            </div>
        <div className='contenedor-redes'>
            <div className='redes-texto'>
            <p>VISITA NUESTRO CANALES OFICIALES</p>
            </div>
            <div className='redes-links'>
                <button><FaInstagram/></button>
                <button><FaTwitter/></button>
                <button><FaFacebook/></button>
                <button><FaTwitch/></button>
            </div>
         
        </div>
        

    </div>
  )
}

export default Footer