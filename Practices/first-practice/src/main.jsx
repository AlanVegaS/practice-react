import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CounterDecrement } from './components/CounterDecrement.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterDecrement/>
  </React.StrictMode>,
)
