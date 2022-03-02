import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ProductItem from './ProductItem';
import { SORTMENU_LIST } from './sortmenudata.js';
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
              {SORTMENU_LIST.map(menu => (
                <li key={menu.id} className="item">
                  {menu.name}
                </li>
              ))}
            </ul>
          </div>
        </header>
        <section className="list">
          {productList.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </section>
        <div className="paging">
          <p className="pagingBox">
            <Link to="/" className="link">
              ←
            </Link>
          </p>
          <p className="pagingBox">
            <Link to="/" className="link">
              ←
            </Link>
          </p>
          <p className="pagingBox">
            <ul>
              <li>
                <NavLink to="/" className="link">
                  1
                </NavLink>
              </li>
            </ul>
          </p>
          <p className="pagingBox">
            <Link to="/" className="link">
              →
            </Link>
          </p>
          <p className="pagingBox">
            <Link to="/" className="link">
              →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
