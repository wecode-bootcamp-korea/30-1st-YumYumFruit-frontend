import React from 'react';
import { Link } from 'react-router-dom';
import './ProductListItem.scss';

function ProductListItem({ product }) {
  const { name, country, price, thumbnail_image_url } = product;

  return (
    <article className="productListItem">
      <div className="imgContainer">
        <Link to="/">
          <img alt="img" src={thumbnail_image_url} className="img" />
        </Link>
      </div>
      <ul className="info">
        <li className="item">
          <Link to="/" className="link">
            {name}
          </Link>
        </li>
        <li className="item">{country}</li>
        <li className="item">
          <span className="price">{Math.floor(price).toLocaleString()}원</span>
        </li>
      </ul>
    </article>
  );
}

export default ProductListItem;
