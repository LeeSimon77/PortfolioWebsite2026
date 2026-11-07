import { getFilteredExperiences} from "../Helpers/FilterHelpers.jsx";
import ExperienceComponent from "./ExperienceComponent.jsx";
import {useState, useEffect} from "react";
import FilterListComponent from "./FilterListComponent.jsx";


export default function ExperienceList({ defaultFilter }) {
  const [activeFilters, setActiveFilters] = useState([defaultFilter]);

  const experiences = getFilteredExperiences(activeFilters);

  function addActiveFilter(filter) {
      setActiveFilters((prevFilters) => {
        if(!prevFilters.includes(filter)) {
          return [...prevFilters, filter]
        }
        else{
          return prevFilters
        }
      }
    );
  }

  function removeActiveFilter(filter) {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  }

  function resetFilters() {
    setActiveFilters([defaultFilter]);
  }

  return (
    <div className="experienceList">
        <FilterListComponent activeFilters={activeFilters} addActiveFilter={addActiveFilter} removeActiveFilter={removeActiveFilter} resetFilters={resetFilters} experiences={experiences} defaultFilter={defaultFilter}/>
      {experiences.length > 0 ?
        experiences.map((experience) => (
          <ExperienceComponent key={experience.id} {...experience} />
        )) : <p>Nothing found matching all filters.</p>}</div>
  );
}
