import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { AppTheme } from './theme'
import { Provider } from "react-redux";
import { store } from './store'
import { JournalApp } from './JournalApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppTheme>
      <Provider store={store}>
        <JournalApp />
      </Provider>
    </AppTheme>
  </React.StrictMode>,
)