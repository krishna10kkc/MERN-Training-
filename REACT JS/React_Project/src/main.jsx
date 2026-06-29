import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './Context/Theme.jsx'
// import { GlobalProvider } from './Context/GlobalVar.jsx'
import { WelcomeProvider } from './Context/Welcome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WelcomeProvider>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </WelcomeProvider>
    
  </StrictMode>,
)
