import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import MerchControl from './components/MerchControl.jsx'

// import Store from './components/Store.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    {/* <Store /> */}
    <MerchControl />
  </React.StrictMode>,
)