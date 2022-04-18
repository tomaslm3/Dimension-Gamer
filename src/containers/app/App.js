
import NavBar from '../../components/NavBar/NavBar';
import { Noticias } from '../../components/noticias/Noticias';
import './App.css';
import CarouselFeatures from '../../components/carrouselFeatures/CarouselFeatures';
import Portada from '../../components/Portada/Portada';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';



function App() {

  const [ state , setState] = useState( [] );
  
  useEffect(() => {

    const getData = async () => {
      let { data } = await axios.get('http://localhost:8000/games');
      return data;
    }

    getData().then( games => setState( games ) );
  
  }, [])

  console.log( state );
  

  
  return (
    <>
      <NavBar/>
      <Portada/>
      <Noticias />
      <CarouselFeatures 
      slides={ state }
      />
      <CarouselFeatures 
      slides={ state }
      onSale={true}/>
      <Footer/>
    </>
  );
}

export default App; 
