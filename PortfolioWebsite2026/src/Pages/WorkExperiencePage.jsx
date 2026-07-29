import ExperienceList from "../Components/ExperienceList.jsx";


export default function ProjectsPage() {

  return (
    <div className="page">
        
        <h1>Work Experience</h1>
        <ExperienceList defaultFilter="Work" />

    </div>
  );
}