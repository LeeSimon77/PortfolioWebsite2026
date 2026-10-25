import getAppConstants from "../Data/AppConstants.js";
import {Link} from "react-router";
import "../Styles/Navbar.css";

export default function Navbar() {
  const appConstants = getAppConstants();

  //<Link to={appConstants.contactLink}>Contact</Link>

    return (
        <nav className="navbar">
          <Link to={appConstants.homeLink}>Home </Link>
          <Link to={appConstants.workLink}>Work </Link>
          <Link to={appConstants.volunteeringLink}>Volunteering </Link>
          <Link to={appConstants.projectsLink}>Projects </Link>
        
          <div className="socials">
            <a href="https://www.linkedin.com/in/ceilidhsimon" target="_blank"><img className="socialImg" src="Socials/InBug-White.png" alt="Linkedin" /></a>
            <a href="https://github.com/LeeSimon77" target="_blank"><img className="socialImg" src="Socials/GitHub_Invertocat_White.png" alt="GitHub"/></a>
          </div>
        </nav>
    );
}   