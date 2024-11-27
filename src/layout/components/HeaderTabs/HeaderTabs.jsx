import { useMediaQuery, useTheme } from "@mui/material"

import MenuTabs from "../MenuTabs/MenuTabs"
import NavbarTabs from "../NavbarTabs/NavbarTabs"

const HeaderTabs = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  if (isSmallScreen) {
    return <MenuTabs />
  }

  return <NavbarTabs />
}

export default HeaderTabs