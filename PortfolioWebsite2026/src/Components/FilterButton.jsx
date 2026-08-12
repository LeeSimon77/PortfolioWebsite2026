import "../Styles/FilterButton.css";
import { useState, useEffect } from "react";
export default function FilterButton({ filter, displayName, activeFilters, setActiveFilters, resetTrigger}) {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
            setIsActive(false);
    }, [resetTrigger]);

function filterButtonOnClick() {
    if(!isActive){
        setIsActive(true);
        setActiveFilters([...activeFilters, filter]);
    }
    else{
        setIsActive(false);
        setActiveFilters(activeFilters.filter((f) => f !== filter));
    }
}
    return (
        <button className={`filter-button${isActive ? "-active" : ""}`} onClick={filterButtonOnClick}>
            {displayName}
        </button>
    )
}