import "../Styles/FilterButton.css";
import { useState, useEffect } from "react";
export default function FilterButton({filter, displayName, addOrRemoveFilter}) {

function filterButtonOnClick() {
        addOrRemoveFilter(filter);
}
    return (
        <button className="filter-button" onClick={filterButtonOnClick}>
            {displayName}
        </button>
    )
}