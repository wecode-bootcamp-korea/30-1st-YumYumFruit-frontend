import React from 'react';
import { Link } from 'react-router-dom';
import './Slide.scss';

function Slide({ item }) {
  const { imgSrc, url } = item;
  return (
    <li className="slide">
      <Link to={url} className="link">
        <img alt="slideImg" src={imgSrc} className="slideImg" />
      </Link>
    </li>
  );
}

export default Slide;
