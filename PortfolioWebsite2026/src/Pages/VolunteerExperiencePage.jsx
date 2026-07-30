import ExperienceList from "../Components/ExperienceList.jsx";


export default function ProjectsPage() {

  return (
    <div className="page">
        
        <h1>Volunteer Experience</h1>
        <ExperienceList defaultFilter="Volunteering" filterList = {[
          { filter: "Community Service", displayName: "Community Service" },
          { filter: "Event Organization", displayName: "Event Organization" }
        ]}/>

    </div>
  );
}