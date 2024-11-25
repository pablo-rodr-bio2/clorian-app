/* eslint-disable react/prop-types */
import { Box, InputLabel, MenuItem, Select } from "@mui/material"

const SelectOrderProducts = ({ order, onChange}) => {
  const handleOrder = (event) => {
    onChange(event.target.value)
  } 
  
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems:'center' }}>
      <InputLabel id="order-by-label">Order by</InputLabel>

      <Select
        value={order}
        onChange={handleOrder}
        label="Order by"
      >
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="description">Description</MenuItem>
      </Select>
    </Box>
  )
}

export default SelectOrderProducts