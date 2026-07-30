import ExperienceList from "../Components/ExperienceList.jsx";


export default function ProjectsPage() {

  return (
    <div className="page">
        
        <h1>Projects</h1>
        <ExperienceList defaultFilter="Projects" filterList = {[
          { filter: "Web Development", displayName: "Web Development" },
          { filter: "Mobile Development", displayName: "Mobile Development" },
          { filter: "Test1", displayName: "Test1" },
          { filter: "Test2", displayName: "Test2" }
        ]}/>

    </div>
  );
}