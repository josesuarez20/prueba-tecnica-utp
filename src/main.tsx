import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@styles/global.css'
import App from './app/App.tsx'
import { AppProvider } from '@/app/providers/AppProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>,
)
