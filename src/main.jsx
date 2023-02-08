import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './components/App';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
      {/* <Routes>
      <Route exact path="/" component={<App />} />

      <Route exact path="/NotFound" element={<h1>Not Found</h1>} />
      </Routes> */}
    </BrowserRouter>
  </React.StrictMode>,
)
