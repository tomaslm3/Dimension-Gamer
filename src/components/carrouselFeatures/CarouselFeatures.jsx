import React, { useState, useEffect } from "react";
import "./carouselFeatures.css";

function CarouselFeatures({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;
  const autoScroll = true;
  let slideInterval;
  
  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  function auto() {
    let intervalTime = 5000;
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(() => {
    setCurrentSlide(0)
  }, [])
  useEffect(() => {
    if(autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide])

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="carousel">
      <button className="left-arrow" onClick={prevSlide}>
        Flecha Izquierda
      </button>
      {slides.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide active" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="img not found" className="image" />
                <h2>{slide.data.title}</h2>
                <p>{slide.data.description}</p>
              </div>
            )}
          </div>
        );
      })}
      <button className="right-arrow" onClick={nextSlide}>
        Flecha Derecha
      </button>
    </section>
  );
}

export default CarouselFeatures;
