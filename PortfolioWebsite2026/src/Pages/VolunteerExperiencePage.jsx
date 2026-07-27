import ExperienceComponent from "../Components/ExperienceComponent.jsx";
import {getFilteredExperiences} from "../Helpers/FilterHelpers.jsx";
import { useState } from "react";

export default function VolunteerExperiencePage() {
    const [activeFilters, setActiveFilters] = useState(["Volunteering"]);

    const experiences = getFilteredExperiences(activeFilters);

  return (
    <div className="page">
        <h1>Volunteer Experience</h1>
        {experiences.map((experience) => (
            <ExperienceComponent key={experience.id} {...experience} />
        ))}
    </div>
  );
}