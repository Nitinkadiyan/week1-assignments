import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './app.jsx';
import About from './MainContent/about.jsx';
import Home from './MainContent/home.jsx';
import Resume from './MainContent/resume.jsx';
import SideBar from './sideBar.jsx';
import App from './app.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>,
)
