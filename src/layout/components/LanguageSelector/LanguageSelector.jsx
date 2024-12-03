import { MenuItem, Select } from "@mui/material"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const LanguageSelector = () => {
  const { i18n }  = useTranslation()
  const [ language, setLanguage ] = useState(i18n.language)
  

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value)
    setLanguage(event.target.value)
  }

  return (
    <Select
      value={language}
      onChange={handleChange}
    >
      <MenuItem value="en">English</MenuItem>
      <MenuItem value="es">Español</MenuItem>
    </Select>
  )
}

export default LanguageSelector