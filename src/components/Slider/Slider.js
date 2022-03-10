import React, { useState, useRef, useEffect } from 'react';
import Slide from './Slide';
import { SLIDE_LIST } from './slidedata';
import './Slider.scss';

const TOTAL_SLIDES = SLIDE_LIST.length - 1;

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
        {SLIDE_LIST.map(item => (
          <Slide key={item.id} item={item} />
        ))}
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
