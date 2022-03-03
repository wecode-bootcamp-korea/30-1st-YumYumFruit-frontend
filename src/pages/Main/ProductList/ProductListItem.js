import React from 'react';
import { Link } from 'react-router-dom';
import './ProductListItem.scss';

function ProductListItem({ product }) {
  const { name, country, price, thumb_image } = product;

  return (
    <article className="productListItem">
      <div className="imgContainer">
        <Link to="/">
          <img alt="img" src={thumb_image} />
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
          <span className="price">{price.toLocaleString()}원</span>
        </li>
      </ul>
    </article>
  );
}

export default ProductListItem;
