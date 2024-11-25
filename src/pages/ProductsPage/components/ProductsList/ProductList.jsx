/* eslint-disable react/prop-types */
import { Box, Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const orderProducts = (products, order) => {
  return products.sort((a, b) => a[order].localeCompare(b[order]))
}

const sortProducts = (products, sort) => {
  if(!sort) {
    return products
  }

  return products.filter(product => product.name.toLowerCase().includes(sort.toLowerCase())
    || product.description.toLowerCase().includes(sort.toLowerCase()))
}

const ProductList = ({ products }) => {
  const [ order, setOrder ] = useState('name')
  const [ sort, setSort ] = useState(undefined)
  const [ filteredProducts, setFilteredProducts ] = useState([])

  useEffect(() => {
    const sortedProducts = orderProducts(products, order)
    const orderedProducts = sortProducts(sortedProducts, sort)
    setFilteredProducts(orderedProducts)
  }, [products, order, sort])

  const handleOrder = (event) => {
    setOrder(event.target.value)
  }

  const handleSort = (event) => {
    setSort(event.target.value)
  }

  

  return (
    <>
      <Box>
        <InputLabel id="order-by-label">Order by</InputLabel>
        <Select
          value={order}
          onChange={handleOrder}
          label="Order by"
        >
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="description">Description</MenuItem>
        </Select>

        <InputLabel id="search">Search</InputLabel>
        <TextField id="search" variant="outlined" value={sort} onChange={handleSort} />
        <Button variant="contained" color="primary"  onClick={() => setSort('')}>Reset</Button>
      </Box>
        
      <Box>
          {filteredProducts.map(product => (
            <Box key={product.id}>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
              <Box>{product.description}</Box>
              <Box>{product.cost}</Box>
            </Box>
          ))}
      </Box>
    </>
  )
}

export default ProductList