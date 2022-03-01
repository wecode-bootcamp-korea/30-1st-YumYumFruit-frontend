import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch('/data/productListData.JSON')
      .then(res => res.json())
      .then(data => setProductList(data));
  }, []);

  return (
    <div className="productList">
      <header>
        <div className="halfBox">
          <div className="leftBox">
            TOTAL <span className="totalNum">10</span> ITEMS
          </div>
          <div className="halfBox">
            <ul className="rightBox">
              <li class="sort">LOW PRICE</li>
              <li class="sort">HIGH PRICE</li>
              <li class="sort">NAME</li>
              <li class="sort">NEW</li>
              <li class="sort">REVIEW</li>
            </ul>
          </div>
        </div>
      </header>
      <section>
        {productList.map(product => (
          <ProductItem key="product.id" product={product} />
        ))}
      </section>
    </div>
  );
}

export default ProductList;
