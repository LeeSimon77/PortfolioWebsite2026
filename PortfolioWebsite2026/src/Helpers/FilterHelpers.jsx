import GetExperience from "../Data/Experience.js";

export function getFilteredExperiences(filters) {
    let filteredExperiences = [];

    let experiences = GetExperience();

    experiences.forEach((experience) => {
        let hasAllFilters = filters.length === 0 || filters.every((filter) => experience.tags.includes(filter));
        if (hasAllFilters) {
            filteredExperiences.push(experience);
        }
    });
    
    return filteredExperiences;
}

export function getFilters(experiences, defaultFilter)
{
    let filters = [];

    experiences.forEach((experience) => {
        experience.tags.forEach((tag) => {
            if(!filters.includes(tag)) {
                filters.push(tag);
            }
        });
    });

    if(filters.includes(defaultFilter)) {
        filters = filters.filter((filter) => filter !== defaultFilter);
    }

    return filters;
}