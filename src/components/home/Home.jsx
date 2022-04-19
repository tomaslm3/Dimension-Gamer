import React, { useContext } from "react";
import NavBar from '../NavBar/NavBar';
import { Noticias } from '../noticias/Noticias';
import CarouselFeatures from '../carrouselFeatures/CarouselFeatures';
import Portada from '../Portada/Portada';
import Footer from '../Footer/Footer';
// import axios from 'axios';
import {DataContext} from "../dataContext/DataContext";

export default function Home() {
  // const [ state , setState] = useState( [] );
  
  // useEffect(() => {
    
  //   const getData = async () => {
  //     let { data } = await axios.get('http://localhost:8000/games');
  //     return data;
  //   }
    
  //   getData().then( games => setState( games ) );
    
  // }, [])
  // const context = useContext()
  // const stateJuegos = context(state);
  // console.log( state );

  const data = useContext(DataContext)
//   console.log(data)
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