import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link, useRouteError } from "react-router-dom"
import { clearCart } from "../../features/shopping-cart/shoppingCartSlice";

const ErrorPage = () => {
  const error = useRouteError();

  const dispatch = useDispatch();

  const handleResetCart = () => {
    dispatch(clearCart());
    localStorage.removeItem('shoppingCart');
  };

  return(
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <Button variant="contained">Back to Products</Button>
      </Link>
      <Button onClick={handleResetCart}>Clear local storage</Button>
    </div>
  )
}

export default ErrorPage