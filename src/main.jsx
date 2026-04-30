import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import CartProvider from './componants/context/CartContext.jsx'
const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
   <HashRouter>
  <CartProvider>
    <App />
  </CartProvider>
</HashRouter>
  </StrictMode>
)