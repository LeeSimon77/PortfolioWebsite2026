import {getFilteredExperiences} from "../Helpers/FilterHelpers.jsx";
import ExperienceComponent from "../Components/ExperienceComponent.jsx";
import { useState } from "react";

export default function ProjectsPage() {

    const [activeFilters, setActiveFilters] = useState(["Projects"]);

    const experiences = getFilteredExperiences(activeFilters);

  return (
    <div className="page">
      <button onClick={() => setActiveFilters(["Projects","Perforce"])}>Test1</button>
      <button onClick={() => setActiveFilters(["Projects"])}>Test2</button>

        <h1>Projects</h1>
        {experiences.map((experience) => (
            <ExperienceComponent key={experience.id} {...experience} />
        ))}
    </div>
  );
}