import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { resetCart } from "../../redux/actions";
import { useDispatch } from "react-redux";
import './CompraExitosa.css';

function CompraExitosa() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(resetCart());
        redirect()
    }, [dispatch, navigate]);

    function redirect() {
        setTimeout(() => { navigate('/') }, 5000)
    }
    return (
        <div className="succes-purchase">
            <h1>Su compra se ha realizado con éxito</h1>
            <h2>Gracias por su compra</h2>
            <h3>En breve recibirá un correo con los detalles de su compra</h3>
            <h3>En unos segundos seras redirigido...</h3>
            <br />
            <br />
            <br />
            <br />
            <Link to="/">    
            <p>Si no fuiste redirigido clickea aqui...</p>
            </Link>
        </div>
    );
}

export default CompraExitosa;