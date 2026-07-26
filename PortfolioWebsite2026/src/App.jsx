import './Styles/App.css'
import {Link, Routes, Route} from "react-router";
import WorkExperiencePage from "./Components/Pages/WorkExperiencePage.jsx";
import VolunteerExperiencePage from "./Components/Pages/VolunteerExperiencePage.jsx";
import ProjectsPage from "./Components/Pages/ProjectsPage.jsx";

function App() {
  const aboutLink = "/about";
  const workLink = "/work";
  const volunteeringLink = "/volunteering";
  const contactLink = "/contact";
  const projectsLink = "/projects";

  return (
    <div> 
      <nav>
        <Link to="/">Home </Link>
        <Link to={aboutLink}>About </Link>
        <Link to={workLink}>Work </Link>
        <Link to={volunteeringLink}>Volunteering </Link>
        <Link to={projectsLink}>Projects </Link>
        <Link to={contactLink}>Contact</Link>
    </nav>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path={aboutLink} element={<div><p>About</p></div>} />
        <Route path={workLink} element={<WorkExperiencePage />} />
        <Route path={volunteeringLink}element={<VolunteerExperiencePage />} />
        <Route path={projectsLink} element={<ProjectsPage />} />
        <Route path={contactLink} element={<div><p>Contact</p></div>} />
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
