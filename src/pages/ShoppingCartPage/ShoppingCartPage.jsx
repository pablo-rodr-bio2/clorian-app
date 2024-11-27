import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

import ShoppingCartList from "./components/ShoppingCartList/ShoppingCartList"
import ShoppingCartSummary from "./components/ShoppingCartSummary/ShoppingCartSummary"

const ShoppingCartPage = () => {
  const { t } = useTranslation()
  const shoppingCart = useSelector(state => state.shoppingCart)

  return (
    <Box>
      <Typography variant="h4" align="center" sx={{ mt: 3, mb: 3 }}>{t("shoppingCart")}</Typography>

      {!shoppingCart.products.length 
        ? <Typography align="center">{t("cartEmpty")}</Typography>
        : (
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row'}, justifyContent:'center', gap: 2}}>
            <ShoppingCartList shoppingCart={shoppingCart} />
  
            <ShoppingCartSummary shoppingCart={shoppingCart} />        
          </Box>
        )
      }
    </Box>
  )
}

export default ShoppingCartPage