import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import ProductItem from 'pages/ProductListPage/ProductItem/ProductItem';
import Pagination from 'pages/ProductListPage/Pagination/Pagination';
import { getProducts } from 'api/api';
import './ProductListPage.scss';

function ProductListPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [productList, setProductList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const makeQuery = ({ sort = 'price', page = 1 }) => {
    const category = searchParams.get('category');
    const query = `?category=${category}&sort=${sort}&page=${page}`;
    return query;
  };

  const updateUrl = queryObj => {
    const query = makeQuery(queryObj);
    navigate(`${query}`);
  };

  const handleLoad = async query => {
    const { product_offset, total_number_of_pages, total_count } =
      await getProducts(query);
    setProductList(product_offset);
    setTotalPages(total_number_of_pages);
    setTotalCount(total_count);
  };

  useEffect(() => {
    handleLoad(location.search);
  }, [location.search]);

  return (
    <div className="productListPage">
      <div className="inner">
        <header className="menu">
          <ul className="totalCountBox">
            <li className="item">TOTAL</li>
            <li className="item">
              <span className="totalNum">{totalCount}</span>
            </li>
            <li className="item">ITEMS</li>
          </ul>
          <ul className="sortButtonsBox">
            <li className="item" onClick={() => updateUrl({ sort: 'price' })}>
              LOW PRICE
            </li>
            <li className="item" onClick={() => updateUrl({ sort: '-price' })}>
              HIGH PRICE
            </li>
            <li className="item" onClick={() => updateUrl({ sort: 'name' })}>
              NAME
            </li>
            <li
              className="item"
              onClick={() => updateUrl({ sort: 'receiving_date' })}
            >
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
          <Pagination totalPages={totalPages} updateUrl={updateUrl} />
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
