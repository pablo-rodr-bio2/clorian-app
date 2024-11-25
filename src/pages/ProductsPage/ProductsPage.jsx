import { Box, Skeleton, Typography } from "@mui/material" 
import { useFetchProducts } from "../../hooks/useFetchProducts"
import ProductList from "./components/ProductsList/ProductList"

const ProductsPage = () => {
  const { loading, error, products } = useFetchProducts()

  return (
    <Box>
      <Typography variant="h4" align="center" sx={{ mt: 3, mb: 3 }}>PRODUCTS</Typography>
     
      {loading && <Skeleton variant="rectangular" animation="wave" width={210} height={118} />}

      {error && <Typography variant="h6">Error: {error.message}</Typography>} 

      {products && <ProductList products={products} />}   
    </Box>
  )
}

export default ProductsPage