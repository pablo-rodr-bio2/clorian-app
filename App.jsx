import { CssBaseline } from "@mui/material"
import { Provider } from "react-redux"
import { store } from "./src/store"
import { RouterProvider } from "react-router-dom"
import { router } from "./src/router/router"

const App = () => {
  return (
    <>
      <CssBaseline />

      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </>
  )
}

export default App