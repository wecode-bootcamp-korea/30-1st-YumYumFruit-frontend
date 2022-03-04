export async function getProducts({
  category = 'all',
  sort = 'price',
  page = 1,
}) {
  const query = `category=${category}&sort=${sort}&page=${page}`; //
  const response = await fetch(
    `http://10.58.2.143:8000/products/list?${query}`
  );
  const body = await response.json();
  return body;
}
