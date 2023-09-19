// import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/routes'
import { GlobalStyles } from './globalStyles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <BrowserRouter>
      <GlobalStyles />
      <Router />
    </BrowserRouter>
  </>,
)
