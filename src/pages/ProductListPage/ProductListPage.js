import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import ProductItem from 'pages/ProductListPage/ProductItem/ProductItem';
import Pagination from 'pages/ProductListPage/Pagination/Pagination';
import { getProducts } from 'api/api';
import { SORTMENU_LIST } from './sortmenudata';
import './ProductListPage.scss';

function ProductListPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [productList, setProductList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(null);

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
    let result;
    try {
      setLoadingError(null);
      setIsLoading(true);
      result = await getProducts(query);
      const { product_offset, total_number_of_pages, total_count } = result;
      setProductList(product_offset);
      setTotalPages(total_number_of_pages);
      setTotalCount(total_count);
    } catch (error) {
      setLoadingError(error);
      return;
    } finally {
      setIsLoading(false);
    }
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
            {SORTMENU_LIST.map(menu => (
              <li
                key={menu.id}
                className="item"
                onClick={() => updateUrl({ sort: menu.sort })}
              >
                {menu.name}
              </li>
            ))}
          </ul>
        </header>
        <section className="list">
          {productList.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </section>
        <div className="paging">
          <Pagination
            totalPages={totalPages}
            updateUrl={updateUrl}
            isLoading={isLoading}
          />
        </div>
      </div>
      {loadingError && alert(loadingError.message)}
    </div>
  );
}

export default ProductListPage;
