import React, { useEffect, useState } from 'react';
import ProductItem from 'pages/ProductListPage/ProductItem/ProductItem';
import { getProducts } from 'api/api';
import './Main.scss';

function Main() {
  const [productList, setProductList] = useState([]);

  const handleLoad = async query => {
    const { results } = await getProducts(query);
    setProductList(results);
  };

  useEffect(() => {
    handleLoad(`?category=all&sort=price&page=1`);
  }, []);

  return (
    <main className="main">
      <div className="inner">
        <h2 className="title">BEST ITEM</h2>
        <section className="list">
          {productList.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </section>
      </div>
    </main>
  );
}
export default Main;
