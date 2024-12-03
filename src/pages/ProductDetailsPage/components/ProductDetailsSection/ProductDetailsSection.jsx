import { Alert, Box, Button, Grid2 } from "@mui/material"
import ProductDetailsInfo from "../ProductDetailsInfo/ProductDetailsInfo"
import ProductDetailsSelectQuantity from "../ProductDetailsSelectQuantity/ProductDetailsSelectQuantity"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../features/shopping-cart/shoppingCartSlice";
import { useTranslation } from "react-i18next";

const ProductDetailsSection = ({ product }) => {
  const [ quantity, setQuantity ] = useState(1);
  const [ showAlert, setShowAlert ] = useState(false);

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if(product) {
      dispatch(
        addProduct({...product, quantity})
      )

      setShowAlert(true)
    }
  }

  const handleSelectQuantity = (e) => {
    setQuantity(e.target.value)
  }

  const isValidProduct = product && new Date(product.validity) >= new Date();

  return (
    <Grid2 container spacing={2} data-testid='product-details-section-root'>
      <Grid2 size={{ xs: 12, sm: 6}}>
        <ProductDetailsInfo product={product} />
      </Grid2>

      <Grid2 size={{ xs: 12, sm: 6}}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <ProductDetailsSelectQuantity 
            value={quantity} 
            onChange={handleSelectQuantity} 
            isValidProduct={isValidProduct} 
          />

          <Button
            variant="contained" 
            color="primary"
            onClick={handleAddToCart}
            disabled={!isValidProduct}
          >
            {t("addToCart")}
          </Button>

          {showAlert && <Alert severity="success">Added to your cart</Alert>}
        </Box>          
      </Grid2>
    </Grid2>
  )
}

export default ProductDetailsSection