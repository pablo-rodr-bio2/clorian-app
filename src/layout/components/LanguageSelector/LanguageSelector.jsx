import { MenuItem, Select } from "@mui/material"
import { useTranslation } from "react-i18next"

const LanguageSelector = () => {
  const { i18n }  = useTranslation()

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <Select
      value={i18n.languages[1]}
      onChange={handleChange}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="es">Español</MenuItem>
    </Select>
  )
}

export default LanguageSelector