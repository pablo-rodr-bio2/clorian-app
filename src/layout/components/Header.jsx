import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h3>Products</h3>
      </Link>

      <Link to="/shopping-cart">
        <h3>My Shopping Cart</h3>
      </Link>
    </header>
  )
}

export default Header