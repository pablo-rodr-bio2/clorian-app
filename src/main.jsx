import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { CssBaseline } from '@mui/material'

import { store } from './store'
import { router } from './router/router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CssBaseline />

    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
