import { Box, InputLabel, MenuItem, Select } from "@mui/material"
import { useTranslation } from "react-i18next"

const SelectOrderProducts = ({ order, onChange}) => {
  const { t } = useTranslation()

  const handleOrder = (event) => {
    onChange(event.target.value)
  } 
  
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems:'center' }}>
      <InputLabel id="order-by-label">{t('orderBy')}</InputLabel>

      <Select
        value={order}
        onChange={handleOrder}
        label="Order by"
      >
        <MenuItem value="name">{t('name')}</MenuItem>
        <MenuItem value="description">{t('Description')}</MenuItem>
      </Select>
    </Box>
  )
}

export default SelectOrderProducts