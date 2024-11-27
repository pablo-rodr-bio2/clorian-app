import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"

const ShoppingCartList = ({ shoppingCart }) => {
  const { t }  = useTranslation()

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2}}>
      {shoppingCart.products.map(p => (
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
            <Typography>{t("quantity")}: {p.quantity}</Typography>
            <Typography>{t("subtotal")}: ${p.subtotal}</Typography>
          </Box>
        ))
      }
    </Box>
  )
}

export default ShoppingCartList