import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ProductItem from './ProductItem';
import { getProducts } from '../../../api/api';
// import { SORTMENU_LIST } from './sortmenudata.js';
import './ProductList.scss';

function ProductList() {
  const [sort, setSort] = useState('price');
  const [productList, setProductList] = useState([]);

  // const handleLowPriceClick = () => setSort('price');
  const handleNameClick = () => setSort('name');
  const handleHighPriceClick = () => setSort('price');
  const handleNewestClick = () => setSort('receiving_date');

  const handleLoad = async sortQuery => {
    const products = await getProducts(sortQuery);
    setProductList(products);
  };

  const sortedProducts = productList.sort((a, b) => b[sort] - a[sort]);

  useEffect(() => {
    handleLoad(sort);
  }, [sort]);

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
              <li className="item" onClick={handleHighPriceClick}>
                HIGH PRICE
              </li>
              <li className="item" onClick={handleNameClick}>
                NAME
              </li>
              <li className="item" onClick={handleNewestClick}>
                NEW
              </li>
              {/* {SORTMENU_LIST.map(menu => (
                <li key={menu.id} className="item">
                  {menu.name}
                </li>
              ))} */}
            </ul>
          </div>
        </header>
        <section className="list">
          {sortedProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </section>
        <div className="paging">
          <div className="pagingBox">
            <Link to="/" className="link">
              ←
            </Link>
          </div>
          <div className="pagingBox">
            <Link to="/" className="link">
              ←
            </Link>
          </div>
          <div className="pagingBox">
            <ul>
              <li>
                <NavLink to="/" className="link">
                  1
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="pagingBox">
            <Link to="/" className="link">
              →
            </Link>
          </div>
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
