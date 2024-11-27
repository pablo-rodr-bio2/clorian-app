import { Box, Button, TextField } from "@mui/material"
import { useTranslation } from "react-i18next"

const SearchProducts = ({ sort, onChange, onReset}) => {
  const { t } = useTranslation()
  const handleSort = (event) => {
    onChange(event.target.value)
  }

  const handleReset = () => {
    onReset()
  }
  
  return (
    <Box sx={{ display: 'flex', gap: 1, alignItems:'center' }}>
      <TextField id="search" variant="outlined" label={t("search")} value={sort} onChange={handleSort} />

      <Button variant="contained" color="primary" onClick={handleReset} >{t("reset")}</Button>
    </Box>
  )
}

export default SearchProducts