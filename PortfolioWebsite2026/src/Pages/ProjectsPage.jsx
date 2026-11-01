import ExperienceList from "../Components/ExperienceList.jsx";
import FilterListComponent from "../Components/FilterListComponent.jsx";


export default function ProjectsPage() {

  return (
    <div className="page">
        <FilterListComponent/>
        <h1>Projects</h1>
        <ExperienceList defaultFilter="Projects"/>

    </div>
  );
}