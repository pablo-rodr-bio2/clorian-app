/* eslint-disable react/prop-types */
import { Box, Grid2 } from '@mui/material'
import { useEffect, useState } from 'react'

import SelectOrderProducts from '../SelectOrderProducts/SelectOrderProducts'
import SearchProducts from '../SearchProducts/SearchProducts'
import ProductCard from '../ProductCard/ProductCard'

const orderProducts = (products, order) => {
  return products.slice().sort((a, b) => a[order].localeCompare(b[order]))
}

const sortProducts = (products, sort) => {
  if(!sort) return products

  return products.filter(product => product.name.toLowerCase().includes(sort.toLowerCase())
    || product.description.toLowerCase().includes(sort.toLowerCase()))
}

const ProductList = ({ products }) => {
  const [ order, setOrder ] = useState('name')
  const [ sort, setSort ] = useState('')
  const [ filteredProducts, setFilteredProducts ] = useState([])

  useEffect(() => {
    const orderedProducts = orderProducts(products, order)
    const sortedProducts = sortProducts(orderedProducts, sort)
    setFilteredProducts(sortedProducts)
  }, [products, order, sort])

  const handleOrder = (value) => {
    setOrder(value)
  }

  const handleSort = (value) => {
    setSort(value)
  }

  const handleReset = () => {
    setSort('')
  }

  if(products.length === 0) {
    return undefined
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3}}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
        <SelectOrderProducts order={order} onChange={handleOrder} />
        
        <SearchProducts sort={sort} onChange={handleSort} onReset={handleReset} />
      </Box>
        
      <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12}}>        
        {filteredProducts.map(product => (
          <Grid2 size={{ xs: 2, sm: 3, md: 3}} key={product.id} display="flex" >
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  )
}

export default ProductList