import { Box, InputLabel, MenuItem, Select } from "@mui/material"
import { useTranslation } from "react-i18next";

import { ITEM_QUANTITIES } from "../../../../constants/db_urls"

const ProductDetailsSelectQuantity = ({ value, onChange, isValidProduct}) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
      <InputLabel sx={{ flex: 1, textAlign: 'center'}}>{t("quantity")}</InputLabel>
      
      <Select
        value={value}
        onChange={onChange}
        disabled={!isValidProduct}
        sx={{ flex: 1}}
      >
        {ITEM_QUANTITIES.map(number => (
          <MenuItem key={number} value={number}>{number}</MenuItem>
        ))}
      </Select>
    </Box>
  )
}

export default ProductDetailsSelectQuantity