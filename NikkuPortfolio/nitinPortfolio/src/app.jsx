import './App.css';
import SideBar from './sideBar.jsx';
import About from './MainContent/about.jsx';
import Portfolio from './MainContent/portfolio.jsx';
// import Contact from './MainContent/contact.jsx';
import Resume from './MainContent/resume.jsx';
import Home from './MainContent/home.jsx';
// import Testimonials from './MainContent/testimonials.jsx';
import Contact from './MainContent/contact.jsx';




export default function App() {
  return (
   <>
   <div className="entire-screen">
    <Home/>
   <div className="portfolio-layout">
    <div className="sidebar"><SideBar/></div>
    <div className="portfolio-content">
      <About/>
      <Resume/>
    <Portfolio/>
      <Contact/>
    </div>
   </div>
   </div>

   </>
  )
}