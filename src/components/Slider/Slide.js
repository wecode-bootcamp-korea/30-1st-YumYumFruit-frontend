import React from 'react';
import { Link } from 'react-router-dom';
import './Slide.scss';

function Slide({ img }) {
  return (
    <li className="slide">
      <Link to="/" className="link">
        <img alt="slideImg" src={img} className="slideImg" />
      </Link>
    </li>
  );
}

export default Slide;
