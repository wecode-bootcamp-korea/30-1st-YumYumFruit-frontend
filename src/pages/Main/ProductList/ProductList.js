import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProductItem from './ProductItem';
import { getProducts } from '../../../api/api';
// 상수 데이터 파일 사용 여부 질문
// import { SORTMENU_LIST } from './sortmenudata.js';
import './ProductList.scss';

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [sort, setSort] = useState('price');
  const [searchParams] = useSearchParams('');

  // state가 변하지 않음
  // Nav 메뉴 누를때 마다, Keyword state가 변하도록 이벤트 함수 추가 필요
  // App.js 필요한지? App.js에서 데이터 불러와야 하는지?
  const [keyword, setKeyword] = useState(searchParams.get('category'));

  const handleLowPriceClick = () => setSort('price');
  const handleHighPriceClick = () => setSort('-price');
  const handleNameClick = () => setSort('name');
  const handleNewestClick = () => setSort('receiving_date');

  const handleLoad = async query => {
    const { results } = await getProducts(query);
    setProductList(results);
  };

  useEffect(() => {
    handleLoad({ category: keyword, sort });
  }, [keyword, sort]);

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
              <li className="item" onClick={handleLowPriceClick}>
                LOW PRICE
              </li>
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
          {productList.map(product => (
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
                <Link to="/" className="link">
                  1
                </Link>
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
