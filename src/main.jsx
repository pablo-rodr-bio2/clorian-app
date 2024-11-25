import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import { Provider } from 'react-redux'
import { store } from './store'
import Layout from './layout/Layout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "product/:productId",
        element: <ProductDetailsPage />,
      },
      {
        path: "shopping-cart",
        element: <ShoppingCartPage />,
      }
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />

    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
