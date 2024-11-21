import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import { useFetchProducts } from "../../hooks/useFetchProducts"

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
      <Box>
        {products.map(product => (
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

export default ProductsPage