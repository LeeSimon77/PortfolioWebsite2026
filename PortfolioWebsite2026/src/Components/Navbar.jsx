import getAppConstants from "../Data/AppConstants.js";
import {Link} from "react-router";

export default function Navbar() {
  const appConstants = getAppConstants();

    return (
        <nav className="navbar">
      <nav>
        <Link to="/">Home </Link>
        <Link to={appConstants.workLink}>Work </Link>
        <Link to={appConstants.volunteeringLink}>Volunteering </Link>
        <Link to={appConstants.projectsLink}>Projects </Link>
        <Link to={appConstants.contactLink}>Contact</Link>
    </nav>

        </nav>
    );
}   