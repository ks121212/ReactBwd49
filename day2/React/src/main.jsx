import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Price from './Price'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Price></Price>
  </React.StrictMode>,
)

