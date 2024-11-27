/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material"

const ShoppingCartList = ({ shoppingCart }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2}}>
    {
      shoppingCart.products.map(p => (
        <Box key={p.product.id} 
          sx={{ 
            display: "flex", 
            gap: 3,
            bgcolor: "#e0e0e0", 
            borderRadius: 2, 
            flexDirection: { xs: 'column', sm: 'row'},                  
            padding: { xs: 1, sm: 3} 
          }}>
          <Typography> {p.product.name}</Typography>
          <Typography> ${p.product.cost}</Typography>
          <Typography>Quantity: {p.quantity}</Typography>
          <Typography>Subtotal: ${p.subtotal}</Typography>
        </Box>
      ))
    }
    </Box>
  )
}

export default ShoppingCartList