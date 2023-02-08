import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route exact path="/" component={<h1>Hello world</h1>} />

      <Route exact path="/NotFound" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
