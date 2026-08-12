import { getFilteredExperiences, getFilters } from "../Helpers/FilterHelpers.jsx";
import ExperienceComponent from "./ExperienceComponent.jsx";
import { useState } from "react";
import FilterButton from "./FilterButton.jsx";


export default function ExperienceList({ defaultFilter }) {
  const [activeFilters, setActiveFilters] = useState([defaultFilter]);
  const [resetTrigger, setResetTrigger] = useState(false);

  const experiences = getFilteredExperiences(activeFilters);
  const filterList = getFilters(experiences, defaultFilter);

  const filterButtons = filterList.map((filterItem) => (
    <FilterButton className="filterButton"
      key={filterItem}
      filter={filterItem}
      displayName={filterItem}
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
        <div className="filterButtons" style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
        {filterButtons.map((button, index) => (
          <div key={index}>{button}</div>
        ))}
      </div>

      {experiences.length > 0 ?
        experiences.map((experience) => (
          <ExperienceComponent key={experience.id} {...experience} />
        )) : <p>Nothing found matching all filters.</p>}</div>
  );
}
