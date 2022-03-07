import React, { useEffect, useState } from 'react';
import ProductItem from 'components/ProductItem/ProductItem';
import { getProducts } from 'api/api';
import './Main.scss';

function Main() {
<<<<<<< HEAD
  const [productList, setProductList] = useState([]);

  const handleLoad = async query => {
    const { results } = await getProducts(query);
    setProductList(results);
  };

  useEffect(() => {
    handleLoad({ category: 'all', sort: 'price', page: 1 });
  }, []);

  return (
    <main className="main">
      <section className="list">
        {productList.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
=======
  return <main className="main"></main>;
>>>>>>> master
}
export default Main;
