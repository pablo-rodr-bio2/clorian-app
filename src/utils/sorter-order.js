export const orderProducts = (products, order) => {
  return products.slice().sort((a, b) => a[order].localeCompare(b[order]))
}

export const sortProducts = (products, sort) => {
  if(!sort) return products

  return products.filter(product => product.name.toLowerCase().includes(sort.toLowerCase())
    || product.description.toLowerCase().includes(sort.toLowerCase()))
}
