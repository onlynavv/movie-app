import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from './Router.jsx'
import { MoviesProvider } from './context/moviesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MoviesProvider>
      <AppRouter />
    </MoviesProvider>
  </StrictMode>,
)
