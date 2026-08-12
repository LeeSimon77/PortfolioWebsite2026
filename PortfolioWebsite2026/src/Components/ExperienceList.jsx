import {getFilteredExperiences} from "../Helpers/FilterHelpers.jsx";
import ExperienceComponent from "./ExperienceComponent.jsx";
import { useState } from "react";
import FilterButton from "./FilterButton.jsx";


export default function ExperienceList({defaultFilter, filterList}) {
    const [activeFilters, setActiveFilters] = useState([defaultFilter]);
    const [resetTrigger, setResetTrigger] = useState(false);

    const experiences = getFilteredExperiences(activeFilters);

    const filterButtons = filterList.map((filterItem) => (
      <FilterButton className="filterButton"
        key={filterItem.filter}
        filter={filterItem.filter}
        displayName={filterItem.displayName}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
        resetTrigger={resetTrigger}
      />
    ));

    function clearFilters() {
      setActiveFilters([defaultFilter]);
      setResetTrigger(!resetTrigger);
    }

  return (
    <div className="experienceList">
      <button onClick={clearFilters}>Clear Filters</button>
        {filterButtons.map((button, index) => (
          <div key={index}>{button}</div>
        ))}
        {experiences.length > 0 ?
        experiences.map((experience) => (
            <ExperienceComponent key={experience.id} {...experience} />
        )) : <p>Nothing found matching all filters.</p>}</div>
  );
}
