import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';
import { getProducts } from '../../../api/api';
// 상수 데이터 파일 사용 여부 질문
// import { SORTMENU_LIST } from './sortmenudata.js';
import './ProductList.scss';

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [sort, setSort] = useState('price');

  // 낮은 가격순 정렬 구현 예정
  // const handleLowPriceClick = () => setSort('price');
  const handleNameClick = () => setSort('name');
  const handleHighPriceClick = () => setSort('price');
  const handleNewestClick = () => setSort('receiving_date');

  // 쿼리의 category_id를 가져오는 방법?
  // category_id 값 가져와서 -> 서버에 보내면 -> 필터링된 값을 주나요? 프론트에서 filter 메소드를 써야 하는지?
  const handleLoad = async sortQuery => {
    const products = await getProducts(sortQuery);
    setProductList(products);
  };

  const sortedProducts = productList.sort((a, b) => b[sort] - a[sort]);

  useEffect(() => {
    handleLoad({ sort });
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
