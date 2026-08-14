import { getFilteredExperiences, getGeneralFilters, getTechFilters, getToolFilters, getSkillFilters } from "../Helpers/FilterHelpers.jsx";
import ExperienceComponent from "./ExperienceComponent.jsx";
import { useState } from "react";
import FilterButton from "./FilterButton.jsx";
import "../Styles/ExperienceList.css"


export default function ExperienceList({ defaultFilter }) {
  const [activeFilters, setActiveFilters] = useState([defaultFilter]);
  const [resetTrigger, setResetTrigger] = useState(false);

  const experiences = getFilteredExperiences(activeFilters);
  const generalFilters = getGeneralFilters(experiences, defaultFilter);
  const techFilters = getTechFilters(experiences);
  const toolFilters = getToolFilters(experiences);
  const skillFilters = getSkillFilters(experiences);

  const genFilterButtons = buildFilterButtons(generalFilters);
  const techFilterButtons = buildFilterButtons(techFilters);
  const toolFilterButtons = buildFilterButtons(toolFilters);
  const skillFilterButtons = buildFilterButtons(skillFilters);

  function clearFilters() {
    setActiveFilters([defaultFilter]);
    setResetTrigger(!resetTrigger);
  }

  function buildFilterButtons(filterList) {
    return filterList.map((filterItem) => (
      <FilterButton className="filterButton"
        key={filterItem}
        filter={filterItem}
        displayName={filterItem}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
        resetTrigger={resetTrigger}
      />
    ));
  }

  return (
    <div className="experienceList">
      <div className="filterList">
        <button onClick={clearFilters}>Clear Filters</button>
        {genFilterButtons.length > 0 &&
          <div className="filterButtons">
            <h4>General Filters</h4>
            {genFilterButtons.map((button, index) => (
              <div key={index}>{button}</div>
            ))}
          </div>
        }
        {techFilterButtons.length > 0 &&
          <div className="filterButtons">
            <h4>Tech Filters</h4>
            {techFilterButtons.map((button, index) => (
              <div key={index}>{button}</div>
            ))}
          </div>
        }
        {toolFilterButtons.length > 0 &&
          <div className="filterButtons">
            <h4>Tool Filters</h4>
            {toolFilterButtons.map((button, index) => (
              <div key={index}>{button}</div>
            ))}
          </div>
        }
        {skillFilterButtons.length &&
          <div className="filterButtons">
            <h4>Skill Filters</h4>
            {skillFilterButtons.map((button, index) => (
              <div key={index}>{button}</div>
            ))}
          </div>
        }
      </div>

      {experiences.length > 0 ?
        experiences.map((experience) => (
          <ExperienceComponent key={experience.id} {...experience} />
        )) : <p>Nothing found matching all filters.</p>}</div>
  );
}
