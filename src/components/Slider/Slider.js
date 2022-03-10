import React, { useState, useRef, useEffect } from 'react';
import Slide from './Slide';
import { SLIDE_LIST } from './slidedata';
import './Slider.scss';

const TOTAL_SLIDES = SLIDE_LIST.length - 1;

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);

  const nextSlideClick = () => {
    currentSlide >= TOTAL_SLIDES
      ? setCurrentSlide(0)
      : setCurrentSlide(currentSlide + 1);
  };

  const prevSlideClick = () => {
    currentSlide === 0
      ? setCurrentSlide(TOTAL_SLIDES)
      : setCurrentSlide(currentSlide - 1);
  };

  // TODO) 일정 시간 이후 자동으로 슬라이드 전환
  useEffect(() => {
    ref.current.style.transform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return (
    <section className="slider">
      <ul className="container" ref={ref}>
        {SLIDE_LIST.map(item => (
          <Slide key={item.id} item={item} />
        ))}
      </ul>
      <button className="leftBtn" onClick={prevSlideClick}>
        <span className="arrow">&lang;</span>
      </button>
      <button className="rightBtn" onClick={nextSlideClick}>
        <span className="arrow">&rang;</span>
      </button>
    </section>
  );
}

export default Slider;
