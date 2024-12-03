export const orderProducts = (products, order) => {
  return products.slice().sort((a, b) => {
    if (a[order] > b[order]) return 1;
    if (a[order] < b[order]) return -1;
    return 0;
  });
};

export const sortProducts = (products, sort) => {
  if(!sort) return products

  const lowerCaseSort = sort.toLowerCase()

  return products.filter(product => product.name.toLowerCase().includes(lowerCaseSort)
    || product.description.toLowerCase().includes(lowerCaseSort))
}
