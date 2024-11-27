import { Box, Button, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const MenuTabs = () => {
  const { t } = useTranslation()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, ml: 1 }}>
      <Button
        id="basic-button"
        onClick={handleClick}
        variant="outlined"
      >
        Menu
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/">
          {t("products")}
        </MenuItem>
        
        <MenuItem onClick={handleClose} component={Link} to="/shopping-cart" >
          {t("yourCart")}
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default MenuTabs