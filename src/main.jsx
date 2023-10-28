import React from 'react'
import ReactDOM from 'react-dom/client'
//import Ejemplos from './Ejemplos.jsx'
// import App from './App.jsx';
import App from './App3.jsx'
import './index.css'
import { ThemeProvider } from './context/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    {/* <Ejemplos/> */}
  </React.StrictMode>,
)
