import ExperienceComponent from "../Components/ExperienceComponent.jsx";
import {getFilteredExperiences} from "../Helpers/FilterHelpers.jsx";
import { useState } from "react";

export default function WorkExperiencePage() {
    const [activeFilters, setActiveFilters] = useState(["Work"]);

    const experiences = getFilteredExperiences(activeFilters);

  return (
    <div className="page">
        <h1>Work Experience</h1>
        {experiences.map((experience) => (
            <ExperienceComponent key={experience.id} {...experience} />
        ))}
    </div>
  );
}