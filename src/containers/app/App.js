
import NavBar from '../../components/NavBar/NavBar';
import { Noticias } from '../../components/noticias/Noticias';
import './App.css';
import CarouselFeatures from '../../components/carrouselFeatures/CarouselFeatures';
import { carrouselData } from '../../components/carrouselFeatures/carouselData';



function App() {
  return (
    <>
      <NavBar/>
      
      <Noticias />
    </>
  );
}

export default App;
