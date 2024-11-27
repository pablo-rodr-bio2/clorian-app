import { Tab, Tabs } from "@mui/material"
import { Link } from "react-router-dom"
import { useTabsValue } from "../../hooks/useTabsValue"

const Header = () => {
  const value = useTabsValue()

  return (
    <header>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab
          label="Products"
          value="/"
          component={Link}
          to="/"
        />

        <Tab
          label="Your Cart"
          value="/shopping-cart"
          component={Link}
          to="/shopping-cart"
        />
      </Tabs>
    </header>
  )
}

export default Header