import { CssBaseline } from "@mui/material"
import { Provider } from "react-redux"
import { store } from "./src/store"
import { RouterProvider } from "react-router-dom"
import { router } from "./src/router/router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

const App = () => {
  return (    
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CssBaseline />
        
        <RouterProvider router={router}/>
      </Provider>
    </QueryClientProvider>  
  )
}

export default App