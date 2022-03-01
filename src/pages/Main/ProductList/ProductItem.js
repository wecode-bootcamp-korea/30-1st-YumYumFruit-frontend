import React from 'react';
import { Link } from 'react-router-dom';

function ProductItem({ product }) {
  const { id, name, country, price, thumb_image } = product;

  return (
    <article className="productItem">
      <div class="img">
        <Link to="/">
          <img alt="productImg" src={thumb_image} />
        </Link>
      </div>
      <ul class="info">
        <li>
          <Link to="/" className="link">
            {name}
          </Link>
        </li>
        <li>{country}</li>
        <li className="price">{price}</li>
      </ul>
    </article>
  );
}

export default ProductItem;
