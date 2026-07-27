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