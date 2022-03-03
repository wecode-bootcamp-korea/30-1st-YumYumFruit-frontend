import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import ProductItem from 'components/ProductItem/ProductItem';
import { getProducts } from 'api/api';
import './ProductListPage.scss';

function ProductListPage() {
  const [searchParams] = useSearchParams();
  const [sort, setSort] = useState('price');
  const [productList, setProductList] = useState([]);

  const handleLowPriceClick = () => setSort('price');
  const handleHighPriceClick = () => setSort('-price');
  const handleNameClick = () => setSort('name');
  const handleNewestClick = () => setSort('receiving_date');

  const handleLoad = async query => {
    const { results } = await getProducts(query);
    setProductList(results);
  };

  // useLocation, locationSearch 사용해보기
  // 이슈 : 메뉴 클릭 시 모두 location.search = ?category=all
  // 메뉴 클릭하면 쿼리 붙이는 방법 연구하기
  useEffect(() => {
    handleLoad({ category: searchParams.get('category'), sort });
  }, [searchParams, sort]);

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
                HIsGH PRICE
              </li>
              <li className="item" onClick={handleNameClick}>
                NAME
              </li>
              <li className="item" onClick={handleNewestClick}>
                NEW
              </li>
              {/* 추후 맵을 쓸 수 있을 것 같아 남겨놓음
                s{SORTMENU_LIST.map(menu => (
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

export default ProductListPage;
