/* eslint-disable react/prop-types */
import { Box, Button, Card, CardContent, Grid2, InputLabel, Link, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

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

  if(products.length === 0) {
    return undefined
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3}}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2}}>
        <Box sx={{ display: 'flex', gap: 1, alignItems:'center' }}>
          <InputLabel id="order-by-label">Order by</InputLabel>
          <Select
            value={order}
            onChange={handleOrder}
            label="Order by"
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="description">Description</MenuItem>
          </Select>
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems:'center' }}>
          <InputLabel id="search">Search</InputLabel>
          <TextField id="search" variant="outlined" value={sort} onChange={handleSort} />
          <Button variant="contained" color="primary"  onClick={() => setSort('')}>Reset</Button>
        </Box>
      </Box>
        
      <Grid2 container spacing={2} columns={{ xs: 4, sm: 8, md: 12}}>        
        {filteredProducts.map(product => (
          <Grid2 size={{ xs: 2, sm: 3, md: 3}} key={product.id} display="flex" >
            <Card variant='elevation' sx={{ width: '100%'}}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center'}}>
                <Link component={NavLink} to={`/product/${product.id}`} underline='none'>
                  {product.name}
                </Link>
                <Typography align='justify'>{product.description}</Typography>
                <Typography component="div">
                  <Box sx={{ fontWeight: 'bold'}}>
                  Price: ${product.cost}
                  </Box>
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  )
}

export default ProductList