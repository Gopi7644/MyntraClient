import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Apps from './Apps.jsx'
import { DataProvider } from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <DataProvider>
      <App />
      {/* <Apps /> */}
    </DataProvider>
  </StrictMode>,
)
