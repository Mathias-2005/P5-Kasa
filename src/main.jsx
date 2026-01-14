import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.scss'
import Routing from '../routes/Routing'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Routing />
  </StrictMode>,
)