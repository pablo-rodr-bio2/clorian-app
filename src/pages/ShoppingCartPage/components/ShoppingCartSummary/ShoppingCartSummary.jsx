import { Box, Button, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { clearCart } from "../../../../features/shopping-cart/shoppingCartSlice";
import { useTranslation } from "react-i18next";

const ShoppingCartSummary = ({ shoppingCart }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const handleResetCart = () => {
    dispatch(clearCart());
    localStorage.removeItem('shoppingCart');
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center", padding: 2}}>
      <Typography sx={{ fontWeight: 'bold'}}>TOTAL: ${shoppingCart.total.toFixed(2)}</Typography>

      <Button variant="contained" onClick={handleResetCart}>{t("cartClear")}</Button>
    </Box>
  )
}

export default ShoppingCartSummary