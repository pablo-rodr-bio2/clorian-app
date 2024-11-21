import { useSelector } from "react-redux"

const ShoppingCartPage = () => {
  const shoppingCart = useSelector(state => state.shoppingCart)
  
  if(!shoppingCart.products.length) {
    return <div>Your shopping cart is empty</div>
  }

  return (
    <>
      <div>Your Shopping Cart</div>
      {
        shoppingCart.products.map(p => (
          <div key={p.product.id}>
            <p>{p.product.name}</p>
          </div>
        ))
      }
    </>
  )
}

export default ShoppingCartPage