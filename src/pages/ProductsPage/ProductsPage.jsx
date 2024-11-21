import { Box } from "@mui/material"
import { Link } from "react-router-dom"

const ProductsPage = () => {
  return (
    <>
      <Box>Products Page</Box>
      <Link to="/product/1">Go to product</Link>
    </>
  )
}

export default ProductsPage