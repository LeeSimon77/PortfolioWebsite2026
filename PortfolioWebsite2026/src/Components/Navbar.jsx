import getAppConstants from "../Data/AppConstants.js";
import {Link} from "react-router";

export default function Navbar() {
  const appConstants = getAppConstants();

  //<Link to={appConstants.contactLink}>Contact</Link>

    return (
      <div className = "navbarHolder">
        <nav className="navbar">
          <Link to={appConstants.homeLink}>Home </Link>
          <Link to={appConstants.workLink}>Work </Link>
          <Link to={appConstants.volunteeringLink}>Volunteering </Link>
          <Link to={appConstants.projectsLink}>Projects </Link>
        </nav>
      </div>
    );
}   