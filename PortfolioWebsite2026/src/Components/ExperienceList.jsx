import {getFilteredExperiences} from "../Helpers/FilterHelpers.jsx";
import ExperienceComponent from "./ExperienceComponent.jsx";
import { useState } from "react";
import FilterButton from "./FilterButton.jsx";


export default function ExperienceList({defaultFilter}) {
    const [activeFilters, setActiveFilters] = useState([defaultFilter]);

    const experiences = getFilteredExperiences(activeFilters);

    const filterButtons = [
      <FilterButton filter="test" displayName="Test" activeFilters={activeFilters} setActiveFilters={setActiveFilters}/>,
      <FilterButton filter="test2" displayName="Test2" activeFilters={activeFilters} setActiveFilters={setActiveFilters}/>]

  return (
    <div className="experienceList">
        {filterButtons.map((button, index) => (
          <div key={index}>{button}</div>
        ))}
        {experiences.length > 0 ?
        experiences.map((experience) => (
            <ExperienceComponent key={experience.id} {...experience} />
        )) : <p>Nothing found matching all filters.</p>}</div>
  );
}
