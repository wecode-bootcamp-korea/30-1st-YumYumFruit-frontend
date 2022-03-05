import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ProductItem from 'components/ProductItem/ProductItem';
import Pagination from 'components/Pagination/Pagination';
import { getProducts } from 'api/api';
import './ProductListPage.scss';

function ProductListPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [sort, setSort] = useState('price');
  const [productList, setProductList] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const handleLowPriceClick = () => {
    setSort('price');
    navigate(`?category=${searchParams.get('category')}&sort=price`);
  };

  const handleHighPriceClick = () => {
    setSort('-price');
    navigate(`?category=${searchParams.get('category')}&sort=-price`);
  };

  const handleNameClick = () => {
    setSort('name');
    navigate(`?category=${searchParams.get('category')}&sort=name`);
  };

  const handleNewestClick = () => {
    setSort('receiving_date');
    navigate(`?category=${searchParams.get('category')}&sort=receiving_date`);
  };

  const handleLoad = async query => {
    const { results, total_pages, total_items } = await getProducts(query);
    setProductList(results);
    setTotalPages(total_pages);
    setTotalItems(total_items);
  };

  useEffect(() => {
    handleLoad({ category: searchParams.get('category'), sort, page });
  }, [searchParams, sort, page]);

  return (
    <div className="productListPage">
      <div className="inner">
        <header className="menu">
          <ul className="totalItemsBox">
            <li className="item">TOTAL</li>
            <li className="item">
              <span className="totalNum">{totalItems}</span>
            </li>
            <li className="item">ITEMS</li>
          </ul>
          <ul className="sortButtonsBox">
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
          </ul>
        </header>
        <section className="list">
          {productList.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </section>
        <div className="paging">
          <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;