export async function getProducts({ sort = 'price' }) {
  const query = `sort=${sort}`;
  const response = await fetch(`/data/productListData.JSON?${query}`);
  const body = await response.json();
  return body;
}

// export function filterByKeyword(items, keyword) {
//   console.log(items);
//   console.log(keyword);
//   const test = items.filter(item => item.category_id === keyword);
//   console.log(test);
//   return test;
// }
