import './App.css';
import CarouselFeatures from '../../components/carrouselFeatures/CarouselFeatures';
import { carrouselData } from '../../components/carrouselFeatures/carouselData';

function App() {
  return (
    <div className="App">
      <CarouselFeatures slides={carrouselData}/>
    </div>
  );
}

export default App;
