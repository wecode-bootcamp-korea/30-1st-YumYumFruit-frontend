export async function getProducts({ category = 'all', sort = 'price' }) {
  const query = `category=${category}&sort=${sort}&page=1`; //
  const response = await fetch(
    `http://10.58.2.143:8000/products/list?${query}`
  );
  const body = await response.json();
  return body;
}
