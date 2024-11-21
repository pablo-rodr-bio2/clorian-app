import { useParams } from "react-router-dom"
import { useFetchSingleProduct } from "../../hooks/useFetchSingleProduct"
import { Button, MenuItem, Select } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addProduct } from "../../features/shopping-cart/shoppingCartSlice"

const ProductDetailsPage = () => {
  const [ quantity, setQuantity ] = useState(1);
  const { productId } = useParams();
  const { loading, error, product } = useFetchSingleProduct(productId);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if(product) {
      dispatch(
        addProduct({...product, quantity})
      )
    }
  }

  const isValidProduct = product && new Date(product.validity) >= new Date();

  const numbers = Array.from({ length: 5 }, (_, i) => i + 1);

  if(loading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Error: {error.message}</div>
  }

  if(!product) {
    return <div>Product not found</div>
  }

  return (
    <>
      <div>ProductDetailsPage</div>
      <div>{product.name}</div>
      <div>Description: {product.description}</div>
      <div>Valid until: {product.validity}</div>
      <div>Cost: {product.cost}</div>
      <Select
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        label="Quantity"
      >
        {numbers.map(number => (
          <MenuItem key={number} value={number}>{number}</MenuItem>
        ))}
      </Select>

      <Button 
        variant="contained" 
        color="primary"
        onClick={handleAddToCart}
        disabled={!isValidProduct}
      >
        Add to cart
      </Button>
    </>
  )
}

export default ProductDetailsPage