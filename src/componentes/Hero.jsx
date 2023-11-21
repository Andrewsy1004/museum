import React from 'react';
import p1 from "../img/p1.png"
import p2 from "../img/p2.png"
import p3 from "../img/p3.png"
import p4 from "../img/p4.png"

const CarouselItem = ({ id, imgSrc, prevSlide, nextSlide }) => (
  <div id={id} className="carousel-item relative w-full">
    <img src={imgSrc} className="w-full" style={{ width: '100%', maxHeight: '500px' }} /> {/* Cambio aquí */}
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href={prevSlide} className="btn btn-circle">❮</a> 
      <a href={nextSlide} className="btn btn-circle">❯</a>
    </div>
  </div>
);


const Hero = () => {
  const slides = [
    {
      id: "slide1",
      imgSrc: p1,
      prevSlide: "#slide4",
      nextSlide: "#slide2"
    },
    {
      id: "slide2",
      imgSrc: p2,
      prevSlide: "#slide1",
      nextSlide: "#slide3"
    },
    {
      id: "slide3",
      imgSrc: p3,
      prevSlide: "#slide2",
      nextSlide: "#slide4"
    },
    {
      id: "slide4",
      imgSrc: p4,
      prevSlide: "#slide3",
      nextSlide: "#slide1"
    }
  ];

  return (
    <div className="carousel">
      {slides.map(slide => (
        <CarouselItem
          key={slide.id}
          id={slide.id}
          imgSrc={slide.imgSrc}
          prevSlide={slide.prevSlide}
          nextSlide={slide.nextSlide}
        />
      ))}
    </div>
  );
};

export default Hero;
