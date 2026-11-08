import Popup from 'reactjs-popup';
import "../Styles/FilterListComponent.css"
import { useEffect, useState } from "react";
import FilterButton from "./FilterButton.jsx";
import {getGeneralFilters, getTechFilters, getToolFilters, getSkillFilters } from "../Helpers/FilterHelpers.jsx";

export default function FilterListComponent({activeFilters, addActiveFilter, removeActiveFilter, resetFilters, experiences, defaultFilter}) {

  const generalFilters = getGeneralFilters(experiences, defaultFilter);
  const techFilters = getTechFilters(experiences);
  const toolFilters = getToolFilters(experiences);
  const skillFilters = getSkillFilters(experiences);

  const[genFilterButtons, setGenFilterButtons] = useState([]);
  const[techFilterButtons, setTechFilterButtons] = useState([]);
  const[toolFilterButtons, setToolFilterButtons] = useState([]);
  const[skillFilterButtons, setSkillFilterButtons] = useState([]);
  const[activeFilterButtons, setActiveFilterButtons] = useState([]);
  const[hasFilters, setHasFilters] = useState(false);

  useEffect(() => {
    setGenFilterButtons(buildFilterButtons(generalFilters));
    setTechFilterButtons(buildFilterButtons(techFilters));
    setToolFilterButtons(buildFilterButtons(toolFilters));
    setSkillFilterButtons(buildFilterButtons(skillFilters));
  }, []);

  useEffect(() => {
    buildActiveFilterButtons(activeFilters);
    setHasFilters(activeFilters.length > 1);
  }, [activeFilters]);

  
  function buildFilterButtons(filterList) {
    return filterList.map((filterItem) => (
      <FilterButton className="filterButton"
      key={filterItem}
      filter={filterItem}
      displayName={filterItem}
      addOrRemoveFilter={addActiveFilter}
      />
    ));
  }
    
  function buildActiveFilterButtons(activeFilters) {
    setActiveFilterButtons(activeFilters.map((filterItem) => (
      filterItem !== defaultFilter &&
      <FilterButton className="filterButton"
      key={filterItem}
      filter={filterItem}
      displayName={filterItem}
      addOrRemoveFilter={removeActiveFilter}
      />
    )));
  }
  
  return (
    <div className="FiltersPopup">
      <Popup trigger={
        <button className={hasFilters ? "filterButtonActive" : "filterButtonInactive"}> 
          {hasFilters ? `Filters: ${activeFilters.length > 10 ? "9+" : activeFilters.length-1}`: "Filters"} 
        </button>} 
      position="bottom right">
        <div>
          <div className="filterList">
            <button onClick={resetFilters} style={{marginLeft:"20px"}}>Clear Filters</button>
            <div className="filterButtons">
              <h4>Active Filters: </h4>
              {activeFilterButtons.length > 1 ? activeFilterButtons.map((button, index) => (<div key={index}>{button}</div>)): <p>None</p>}
            </div>

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
          </div>
        </Popup>
      </div>
  )
}