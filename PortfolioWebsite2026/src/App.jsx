import './Styles/App.css'
import {Link, Routes, Route} from "react-router";
import ExperiencePage from "./Components/ExperiencePage.jsx";

function App() {
  const aboutLink = "/about";
  const workLink = "/work";
  const volunteeringLink = "/volunteering";
  const contactLink = "/contact";

  return (
    <div> 
      <navBar>
        <Link to="/">Home </Link>
        <Link to={aboutLink}>About </Link>
        <Link to={workLink}>Work </Link>
        <Link to={volunteeringLink}>Volunteering </Link>
        <Link to={contactLink}>Contact</Link>
    </navBar>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<div><p>About</p></div>} />
        <Route path="/work" element={<ExperiencePage />} />
        <Route path="/volunteering" element={<div><p>Volunteering</p></div>} />
        <Route path="/contact" element={<div><p>Contact</p></div>} />
        <Route path="*" element={<div><p>404 Not Found</p></div>} />
      </Routes>
    </div>
  )
}

function HomePage() {
  return (
    <div>
      <h1>Welcome to my portfolio website!</h1>
      <p>This is the home page.</p>
    </div>
  )
}

export default App
