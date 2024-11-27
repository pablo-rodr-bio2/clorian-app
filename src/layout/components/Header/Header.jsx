import LanguageSelector from "../LanguageSelector/LanguageSelector"
import HeaderTabs from "../HeaderTabs/HeaderTabs"
import { AppBar, Toolbar } from "@mui/material"

const Header = () => {
  return (
    <header>
      <AppBar position="static" color="default" sx={{ padding: 1}}>
        <Toolbar>
          <HeaderTabs />

          <LanguageSelector />      
        </Toolbar>
      </AppBar>
    </header>
  )
}

export default Header