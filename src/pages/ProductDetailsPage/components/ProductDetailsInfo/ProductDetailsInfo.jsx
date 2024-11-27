import { Card, CardContent, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";

const ProductDetailsInfo = ({ product }) => {
  const { t } = useTranslation();

  return (
    <Card variant='elevation' sx={{ width: '100%'}}>
      <CardContent>
        <Typography align="center" variant="h6">{product.name}</Typography>
        <Typography>{t("description")}: {product.description}</Typography>
        <Typography>{t("validUntil")}: {product.validity}</Typography>
        <Typography>{t("cost")}: ${product.cost}</Typography>
      </CardContent>
    </Card>
  )
}

export default ProductDetailsInfo