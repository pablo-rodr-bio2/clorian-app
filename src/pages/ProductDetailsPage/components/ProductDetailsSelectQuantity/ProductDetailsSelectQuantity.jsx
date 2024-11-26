/* eslint-disable react/prop-types */
import { Box, InputLabel, MenuItem, Select } from "@mui/material"
import { ITEM_QUANTITIES } from "../../../../constants/db_urls"

const ProductDetailsSelectQuantity = ({ value, onChange, isValidProduct}) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
      <InputLabel sx={{ flex: 1, textAlign: 'center'}}>Quantity</InputLabel>
      
      <Select
        value={value}
        onChange={onChange}
        label="Quantity"
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