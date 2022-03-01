import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import './ProductList.scss';

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/productListData.JSON')
      .then(res => res.json())
      .then(data => setProductList(data));
  }, []);

  return (
    <div className="productList">
      <div className="inner">
        <header className="menu">
          <div className="halfBox">
            <ul className="leftBox">
              <li className="item">TOTAL</li>
              <li className="item">
                <span className="totalNum">{productList.length}</span>
              </li>
              <li className="item">ITEMS</li>
            </ul>
          </div>
          <div className="halfBox">
            <ul className="rightBox">
              <li className="item">LOW PRICE</li>
              <li className="item">HIGH PRICE</li>
              <li className="item">NAME</li>
              <li className="item">NEW</li>
              <li className="item">REVIEW</li>
            </ul>
          </div>
        </header>
        <section className="list">
          {productList.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default ProductList;
