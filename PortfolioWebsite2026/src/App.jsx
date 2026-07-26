import './Styles/App.css'
import {Routes, Route} from "react-router";
import WorkExperiencePage from "./Pages/WorkExperiencePage.jsx";
import VolunteerExperiencePage from "./Pages/VolunteerExperiencePage.jsx";
import ProjectsPage from "./Pages/ProjectsPage.jsx";
import getAppConstants from "./Data/AppConstants.js";
import Navbar from "./Components/Navbar.jsx";

function App() {
  const appConstants = getAppConstants();

  return (
    <div> 
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path={appConstants.aboutLink} element={<div><p>About</p></div>} />
        <Route path={appConstants.workLink} element={<WorkExperiencePage />} />
        <Route path={appConstants.volunteeringLink}element={<VolunteerExperiencePage />} />
        <Route path={appConstants.projectsLink} element={<ProjectsPage />} />
        <Route path={appConstants.contactLink} element={<div><p>Contact</p></div>} />
        <Route path="*" element={<div><p>404 Not dFound</p></div>} />
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
