import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.scss';

function ProductItem({ product }) {
  const { id, name, country, price, thumbnail_image_url } = product;

  return (
    <article className="productItem">
      <Link to={`/products/${id}`}>
        <img alt="img" src={thumbnail_image_url} className="img" />
      </Link>
      <ul className="info">
        <li className="item">
          <Link to={`/products/${id}`} className="link">
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

export default ProductItem;
