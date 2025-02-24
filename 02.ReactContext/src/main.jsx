import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SongProvider } from './Context/SongContext.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SongProvider>
    <App />
    </SongProvider>
  </StrictMode>,
)
