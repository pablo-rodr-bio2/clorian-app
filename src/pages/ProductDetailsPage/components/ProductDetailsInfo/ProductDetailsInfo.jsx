import { Card, CardContent, Typography } from "@mui/material"

const ProductDetailsInfo = ({ product }) => {
  return (
    <Card variant='elevation' sx={{ width: '100%'}}>
      <CardContent>
        <Typography align="center" variant="h6">{product.name}</Typography>
        <Typography>Description: {product.description}</Typography>
        <Typography>Valid until: {product.validity}</Typography>
        <Typography>Cost: ${product.cost}</Typography>
      </CardContent>
    </Card>
  )
}

export default ProductDetailsInfo