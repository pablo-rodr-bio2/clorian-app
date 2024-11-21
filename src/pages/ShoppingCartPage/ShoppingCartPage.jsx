import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../../features/shopping-cart/shoppingCartSlice"

const ShoppingCartPage = () => {
  const shoppingCart = useSelector(state => state.shoppingCart)
  const dispatch = useDispatch()

  const handleResetCart = () => {
    dispatch(clearCart());
    localStorage.removeItem('shoppingCart');
  };
  
  if(!shoppingCart.products.length) {
    return <div>Your shopping cart is empty</div>
  }

  return (
    <>
      <div>Your Shopping Cart</div>
      {
        shoppingCart.products.map(p => (
          <div key={p.product.id}>
            <p>Product: {p.product.name}</p>
            <p>Quantity: {p.quantity}</p>
            <p>Subtotal: {p.subtotal}</p>
          </div>
        ))
      }
      <Button variant="contained" onClick={handleResetCart}>Clear Cart</Button>
    </>
  )
}

export default ShoppingCartPage