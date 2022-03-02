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
  const [keyword, setKeyword] = useState(searchParams.get('category_id'));

  // 낮은 가격순 정렬 구현 예정
  // const handleLowPriceClick = () => setSort('price');
  const handleNameClick = () => setSort('name');
  const handleHighPriceClick = () => setSort('price');
  const handleNewestClick = () => setSort('receiving_date');

  const handleLoad = async sortQuery => {
    const products = await getProducts(sortQuery);
    setProductList(products);
  };

  // 카테고리 필터링 -> 정렬 순서? 프론트에서 filter, sort 안해도 되는지? 해야 되는지?
  const sortedProducts = productList.sort((a, b) => b[sort] - a[sort]);

  // category_id=n&sort=str
  // category_id 쿼리 자체가 없을 때는 어떻게 처리?
  useEffect(() => {
    handleLoad({ sort });
  }, [sort, keyword]);

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
