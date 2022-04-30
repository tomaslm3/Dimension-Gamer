import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getGames } from '../../redux/actions/index.js';
import Juegos from '../Juegos/Juegos.js';
import "./Catalogo.css"

const Catalogo = ({index}) => {
  const dispatch = useDispatch()
  const games = useSelector(state => state.games)

  useEffect(() => {
    dispatch(getGames())
  }, [dispatch])

  return (
    <div className='container-juegos'>
      <Juegos games={games}/>
    </div>
  )
}

export default Catalogo