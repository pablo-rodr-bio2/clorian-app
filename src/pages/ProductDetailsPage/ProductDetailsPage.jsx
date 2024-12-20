import { useParams } from "react-router-dom"
import { useFetchSingleProduct } from "../../hooks/useFetchSingleProduct"
import { Box, Skeleton, Typography } from "@mui/material"
import ProductDetailsSection from "./components/ProductDetailsSection/ProductDetailsSection";
import { useTranslation } from "react-i18next";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const { t } = useTranslation();
  const { loading, error, product } = useFetchSingleProduct(productId);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" align="center" sx={{ mt: 3, mb: 3 }}>{t("productDetailsTitle")}</Typography>

      {loading && <Skeleton variant="rectangular" animation="wave" width={400} height={200} />}

      {error && <Typography variant="h6">Error: {error.message}</Typography>}

      {product && <ProductDetailsSection product={product} />} 
    </Box>
  )
}

export default ProductDetailsPage