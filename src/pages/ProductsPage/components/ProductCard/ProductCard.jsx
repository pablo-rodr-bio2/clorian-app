/* eslint-disable react/prop-types */
import { Box, Card, CardContent, Link, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
    <Card variant='elevation' sx={{ width: '100%'}}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center'}}>
        <Link component={NavLink} to={`/product/${product.id}`} underline='none'>
          {product.name}
        </Link>

        <Typography align='justify'>{product.description}</Typography>

        <Typography component="div">
          <Box sx={{ fontWeight: 'bold'}}>
            ${product.cost}
          </Box>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ProductCard