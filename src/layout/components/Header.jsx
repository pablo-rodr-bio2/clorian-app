import { Tab, Tabs } from "@mui/material"
import { Link, useLocation } from "react-router-dom"

const Header = () => {
  const location = useLocation()

  return (
    <header>
      <Tabs
        value={location.pathname}
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
          label="My Shopping Cart"
          value="/shopping-cart"
          component={Link}
          to="/shopping-cart"
        />
      </Tabs>
    </header>
  )
}

export default Header


    // <header>
    //   <Link to="/">
    //     <h3>Products</h3>
    //   </Link>

    //   <Link to="/shopping-cart">
    //     <h3>My Shopping Cart</h3>
    //   </Link>
    // </header>