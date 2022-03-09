import React, { useEffect, useState } from 'react';
import Slider from 'components/Slider/Slider';
import ProductItem from 'pages/ProductListPage/ProductItem/ProductItem';
import { getProducts } from 'api/api';
import './Main.scss';

function Main() {
  const [productList, setProductList] = useState([]);

  const handleLoad = async query => {
    const { product_offset } = await getProducts(query);
    setProductList(product_offset);
  };

  useEffect(() => {
    handleLoad(`?category=all&sort=price&page=1`);
  }, []);

  return (
    <main className="main">
      <div className="inner">
        <Slider />
        <h2 className="title">B E S T &nbsp; I T E M</h2>
        <section className="productList">
          {productList.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </section>
      </div>
    </main>
  );
}
export default Main;
