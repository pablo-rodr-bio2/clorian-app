import { Box, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

import ShoppingCartSection from "./components/ShoppingCartSection/ShoppingCartSection"

const ShoppingCartPage = () => {
  const { t } = useTranslation()
  const shoppingCart = useSelector(state => state.shoppingCart)

  return (
    <Box>
      <Typography variant="h4" align="center" sx={{ mt: 3, mb: 3 }}>{t("shoppingCart")}</Typography>

      <ShoppingCartSection shoppingCart={shoppingCart} />
    </Box>
  )
}

export default ShoppingCartPage