import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MoneyState from './context/MoneyState.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MoneyState>
    <App />
    </MoneyState>
  </React.StrictMode>,
)
