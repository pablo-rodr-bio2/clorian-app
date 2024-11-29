import { Box, Button, Typography } from "@mui/material";
import { Link, useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError();

  return(
    <Box>
      <Typography variant="h1">Oops!</Typography>

      <Typography variant="h4">Sorry, an unexpected error has occurred.</Typography>

      <Typography>
        <i>{error.statusText || error.message}</i>
      </Typography>

      <Link to="/">
        <Button variant="contained">Back to Products</Button>
      </Link>
    </Box>
  )
}

export default ErrorPage