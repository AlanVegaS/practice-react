import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme'
import { Provider } from "react-redux";
import { store } from './store'

const router = createBrowserRouter(AppRouter)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AppTheme>
  </React.StrictMode>,
)