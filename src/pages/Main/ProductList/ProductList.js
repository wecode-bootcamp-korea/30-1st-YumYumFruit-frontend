import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import ProductListItem from './ProductListItem';
import { getProducts } from '../../../api/api';
import './ProductList.scss';

function ProductList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams('');
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

  const goToDetail = item => {
    navigate(`/products/detail/${item.id}`);
  };

  // useLocation, locationSearch 사용해보기
  // 메뉴 누르면 뒤에 쿼리 붙이는 방법 공부하기
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
            <ProductListItem
              key={product.id}
              product={product}
              onClick={goToDetail}
            />
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
