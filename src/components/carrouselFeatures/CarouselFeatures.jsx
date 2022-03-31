import React, { useState, useEffect } from "react";
import "./carouselFeatures.css";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

function CarouselFeatures({ slides, onSale }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  let slideDiscount = slides.filter(slide => slide.discounts.discount)
  let length = null
  // Si trabajamos con el carousel de descuento (onSale) el total del carusel es el total de los juegos con descuento
  if(onSale){
    length = slideDiscount.length
  }else{
    length = slides.length;
  }

  const autoScroll = true;
  let slideInterval;
  
  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
  };

  function auto() {
    let intervalTime = 6000;
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

  // Crousel para las ofertas
  if(onSale){
  return (
    <div>
      <div className="title">En oferta</div>
    <section className="carouselDiscounts">
      
      <button className="left-arrow" onClick={prevSlide}>
      <FaAngleDoubleLeft/>
      </button>
      {slideDiscount.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide-active" : "slide"}
            key={index}
          >
            
            {index === currentSlide && (
              <div className='slideStyles'>
              <div className="slideInfo">  
                <h2>{slide.data.title}</h2>
                <p>{slide.data.description}</p>
                <p className="offLabel">-{slide.discounts.percent}%</p>
              </div>
              <img src={slide.image} alt="img not found" className="image" />
            </div>
            )}
          </div>
        );
      })}
      <button className="right-arrow" onClick={nextSlide}>
      <FaAngleDoubleRight/>
      </button>
    </section>
    </div>
  );
  // Crousel para todos los juegos
  } else {
    return (
      <div>
        <div className="title">Destacados</div> 
      <section className="carousel">
        <button className="left-arrow" onClick={prevSlide}>
        <FaAngleDoubleLeft/>
        </button>
        {slides.map((slide, index) => {
          if (slide.discounts.discount) { // EN caso de que el juego tenga descuento
          return (
            <div
              className={index === currentSlide ? "slide-active" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div className='slideStyles'>
                  <img src={slide.image} alt="img not found" className="image" />
                  <div className="slideInfo">  
                    <h2>{slide.data.title}</h2>
                    <p>{slide.data.description}</p>
                    <p>-{slide.discounts.percent}%</p>
                  </div>
                </div>
              )}
            </div>
          );
        } else { // Si el juego no tiene descuento
          return (
            <div
              className={index === currentSlide ? "slide-active" : "slide"}
              key={index}
            >
              {index === currentSlide && (
                <div className='slideStyles'>
                  <img src={slide.image} alt="img not found" className="image" />
                  <div className="slideInfo">
                    <h2>{slide.data.title}</h2>
                    <p>{slide.data.description}</p>
                  </div>
                </div>
              )}
            </div>
          );
        }
        })}
        <button className="right-arrow" onClick={nextSlide}>
        <FaAngleDoubleRight/>
        </button>
      </section>
      </div>
    );
  }
}

export default CarouselFeatures;
