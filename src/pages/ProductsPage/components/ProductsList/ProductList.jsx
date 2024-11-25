/* eslint-disable react/prop-types */
import { Box, InputLabel, MenuItem, Select } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const orderProducts = (products, order) => {
  return products.sort((a, b) => a[order].localeCompare(b[order]))
}

const ProductList = ({ products }) => {
  const [ order, setOrder ] = useState('name')
  const [ orderedProducts, setOrderedProducts ] = useState(orderProducts(products, order))

  const handleOrder = (event) => {
    setOrder(event.target.value)
  }

  useEffect(() => {
    setOrderedProducts(previousOrderedProducts => orderProducts(previousOrderedProducts, order))
  }, [order, orderedProducts])

  return (
    <>
      <InputLabel id="order-by-label">Order by</InputLabel>
      <Select
        value={order}
        onChange={handleOrder}
        label="Order by"
      >
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="description">Description</MenuItem>
      </Select>
        
      <Box>
          {orderedProducts.map(product => (
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