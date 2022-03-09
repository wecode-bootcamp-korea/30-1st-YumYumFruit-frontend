export async function getProducts(query) {
  // const response = await fetch(`http://10.58.6.197:8000/products${query}`);
  const response = await fetch(`/data/productListdata.JSON`);
  const body = await response.json();
  return body;
}
