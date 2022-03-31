
import NavBar from '../../components/NavBar/NavBar';
import { Noticias } from '../../components/noticias/Noticias';
import './App.css';
import CarouselFeatures from '../../components/carrouselFeatures/CarouselFeatures';
import { carrouselData } from '../../components/carrouselFeatures/carouselData';
import Portada from '../../components/Portada/Portada';



function App() {
  return (
    <>
      <NavBar/>
    
      <Portada/>
      <Noticias />
    </>
  );
}

export default App;
