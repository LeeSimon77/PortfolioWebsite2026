   //notes: adding /PortfolioWebsite2026 to the front of every page link to compensate for the refresh redirection issue broke all the images again
  
   const AppConstants = 
    {
      homeLink : "/PortfolioWebsite2026",
      workLink : "/work",
      volunteeringLink : "/volunteering",
      contactLink : "/contact",
      projectsLink : "/projects",
    }

    export default function getAppConstants ()
    {
        return AppConstants;
    }