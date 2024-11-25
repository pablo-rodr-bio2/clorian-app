import { Box } from "@mui/material" 
import { useFetchProducts } from "../../hooks/useFetchProducts"
import ProductList from "./components/ProductsList/ProductList"

const ProductsPage = () => {
  const { loading, error, products } = useFetchProducts()

  if(loading) {
    return <Box>Loading...</Box>
  }

  if(error) {
    return <Box>Error: {error.message}</Box>
  }

  return (
    <>
      <Box>Products Page</Box>
      <ProductList products={products} />
    </>
  )
}

export default ProductsPage