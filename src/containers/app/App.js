
import NavBar from '../../components/NavBar/NavBar';
import { Noticias } from '../../components/noticias/Noticias';
import './App.css';
import CarouselFeatures from '../../components/carrouselFeatures/CarouselFeatures';
import { carouselData } from '../../components/carrouselFeatures/carouselData';
import Portada from '../../components/Portada/Portada';
import Footer from '../../components/Footer/Footer';



function App() {
  return (
    <>
      <NavBar/>
    
      <Portada/>
      <Noticias />
      <CarouselFeatures 
      slides={carouselData}
      />
      <CarouselFeatures 
      slides={carouselData}
      onSale={true}/>
      <Footer/>
    </>
  );
}

export default App;
