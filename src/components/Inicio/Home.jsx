import React, { useEffect, useState } from "react";
import NavBar from '../NavBar/NavBar';
import { Noticias } from '../noticias/Noticias';
import CarouselFeatures from '../carrouselFeatures/CarouselFeatures';
import Portada from '../Portada/Portada';
import Footer from '../Footer/Footer';
import axios from 'axios';

export default function Home() {
    const [ state , setState] = useState( [] );
  
  useEffect(() => {

    const getData = async () => {
      let { data } = await axios.get('http://localhost:8000/games');
      return data;
    }

    getData().then( games => setState( games ) );
  
  }, [])

  console.log( state );
    return(
        <div>
            <NavBar state={state}/>
            <Portada />
            <Noticias />
            <CarouselFeatures 
            slides={ state }
            />
            <CarouselFeatures 
            slides={ state }
            onSale={true}/>
            <Footer/>
        </div>
    )
}