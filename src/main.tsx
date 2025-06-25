import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/custom.css'
import './style/index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
