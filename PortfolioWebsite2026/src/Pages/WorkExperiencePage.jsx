import ExperienceList from "../Components/ExperienceList.jsx";


export default function ProjectsPage() {

  return (
    <div className="page">
        
        <h1>Work Experience</h1>
        <ExperienceList defaultFilter="Work" filterList = {[
          { filter: "Test1", displayName: "Test1" },
          { filter: "Software Engineering", displayName: "Software Engineering" },
          { filter: "Project Management", displayName: "Project Management" }
        ]}/>

    </div>
  );
}