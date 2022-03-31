
import NavBar from '../../components/NavBar/NavBar';
import { Noticias } from '../../components/noticias/Noticias';
import './App.css';
import CarouselFeatures from '../../components/carrouselFeatures/CarouselFeatures';
import { carouselData } from '../../components/carrouselFeatures/carouselData';

function App() {
  return (
    <>
      <NavBar/>
      <Noticias />
      <CarouselFeatures 
      slides={carouselData}
      />
      <CarouselFeatures 
      slides={carouselData}
      onSale={true}/>
  
    </>
  );
}

export default App;
