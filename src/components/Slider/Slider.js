import React, { useState, useRef, useEffect } from 'react';
import Slide from './Slide';
import './Slider.scss';

const TOTAL_SLIDES = 2;

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);

  const nextSlide = () => {
    currentSlide >= TOTAL_SLIDES
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    currentSlide === 0
      ? setCurrentSlide(TOTAL_SLIDES)
      : setCurrentSlide(currentSlide - 1);
  };

  useEffect(() => {
    ref.current.style.transition = 'all 0.5 ease-in-out';
    ref.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <section className="slider">
      <ul className="container" ref={ref}>
        <Slide img="/images/slide1.jpg" />
        <Slide img="/images/slide2.jpg" />
        <Slide img="/images/slide3.jpg" />
      </ul>
      <button className="leftBtn" onClick={prevSlide}>
        <span className="arrow">&lang;</span>
      </button>
      <button className="rightBtn" onClick={nextSlide}>
        <span className="arrow">&rang;</span>
      </button>
    </section>
  );
}

export default Slider;
