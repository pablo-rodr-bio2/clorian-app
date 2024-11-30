import { Box, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import ShoppingCartList from "../ShoppingCartList/ShoppingCartList"
import ShoppingCartSummary from "../ShoppingCartSummary/ShoppingCartSummary"

const ShoppingCartSection = ({ shoppingCart }) => {
  const { t } = useTranslation()

  if(!shoppingCart.products.length) {
    return(
      <Typography align="center">{t("cartEmpty")}</Typography>
    )
  }

  return (
    <Box 
      data-testid="shopping-cart-root"
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row'}, 
        justifyContent:'center', 
        gap: 2}}
    >
      <ShoppingCartList shoppingCart={shoppingCart} />

      <ShoppingCartSummary shoppingCart={shoppingCart} />        
    </Box>
  )
}

export default ShoppingCartSection