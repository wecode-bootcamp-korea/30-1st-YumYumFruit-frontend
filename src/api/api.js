export async function getProducts(sort = 'price') {
  const query = `sort=${sort}`;
  const response = await fetch(`/data/productListData.JSON?${query}`);
  const body = await response.json();
  return body;
}
