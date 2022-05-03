import React from 'react'
import './confirmCompra.css';
import { Link } from 'react-router-dom';

export const ConfirmCompra = ( { setConfirm } ) => {

    const handleButtonSi = () => {
        
    }
    
    
    const handleButtonNo = ( e ) => {
        setConfirm( false )
    }


  return (
    <div className= "card-confirm">

        <h1 className= "card-confirm-title">Desea confirmar la compra ?</h1>
        <div className= 'button-container'>
        <Link to="/succes">
            <button className='button-confirm'>Sí</button>
        </Link>
        
        <button onClick={ handleButtonNo } className='button-confirm'>No</button>

        </div>
    </div>
  )
}
