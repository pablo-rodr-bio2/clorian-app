/* eslint-disable react/prop-types */
import { Box, Button, Typography } from "@mui/material"
import { useDispatch } from "react-redux";
import { clearCart } from "../../../../features/shopping-cart/shoppingCartSlice";

const ShoppingCartSummary = ({ shoppingCart }) => {
  const dispatch = useDispatch()

  const handleResetCart = () => {
    dispatch(clearCart());
    localStorage.removeItem('shoppingCart');
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, alignItems: "center", padding: 2}}>
      <Typography sx={{ fontWeight: 'bold'}}>TOTAL: ${shoppingCart.total.toFixed(2)}</Typography>

      <Button variant="contained" onClick={handleResetCart}>Clear Cart</Button>
    </Box>
  )
}

export default ShoppingCartSummary