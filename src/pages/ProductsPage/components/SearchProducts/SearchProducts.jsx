/* eslint-disable react/prop-types */
import { Box, Button, InputLabel, TextField } from "@mui/material"

const SearchProducts = ({ sort, onChange, onReset}) => {
  const handleSort = (event) => {
    onChange(event.target.value)
  }

  const handleReset = () => {
    onReset()
  }
  
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems:'center' }}>
      <InputLabel id="search">Search</InputLabel>

      <TextField id="search" variant="outlined" value={sort} onChange={handleSort} />

      <Button variant="contained" color="primary" onClick={handleReset} >Reset</Button>
    </Box>
  )
}

export default SearchProducts