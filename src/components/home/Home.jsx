import React, { useState } from "react";
import NavBar from '../NavBar/NavBar';
import { Noticias } from '../noticias/Noticias';
import CarouselFeatures from '../carrouselFeatures/CarouselFeatures';
import Portada from '../Portada/Portada';
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../../redux/actions";



export default function Home() {
    const dispatch = useDispatch();

    useState(() => {
        dispatch(getGames());
    }, []);

    const data = useSelector(state => state.games);


    return(
        <div>
            <NavBar/>
            <Portada />
            <Noticias />
            <CarouselFeatures 
            slides={data}
            />
            <CarouselFeatures 
            slides={data}
            onSale={true}/>
            <Footer/>
        </div>
    )
}