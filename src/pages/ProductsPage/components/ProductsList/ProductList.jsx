import { Box, Grid2 } from '@mui/material'
import { useMemo, useState } from 'react'

import SelectOrderProducts from '../SelectOrderProducts/SelectOrderProducts'
import SearchProducts from '../SearchProducts/SearchProducts'
import ProductCard from '../ProductCard/ProductCard'
import { orderProducts, sortProducts } from '../../../../utils/sorter-order'

const ProductList = ({ products }) => {
  const [ order, setOrder ] = useState('name')
  const [ sort, setSort ] = useState('')

  const orderedProducts = useMemo(() => orderProducts(products, order), [products, order]);
  const filteredProducts = useMemo(() => sortProducts(orderedProducts, sort), [orderedProducts, sort]);

  const handleOrder = (value) => setOrder(value)
  const handleSort = (value) => setSort(value)
  const handleReset = () =>  setSort('')

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, marginBottom: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, flexDirection: { xs: "column", sm: "row"}}}>
        <SelectOrderProducts order={order} onChange={handleOrder} />
        
        <SearchProducts sort={sort} onChange={handleSort} onReset={handleReset} />
      </Box>
        
      <Grid2 container spacing={2} >        
        {filteredProducts.map(product => (
          <Grid2 size={{ xs: 12, sm: 4, md: 3}} key={product.id} display="flex" >
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  )
}

export default ProductList