import GetExperience from "../Data/Experience.js";

export function getFilteredExperiences(filters) {
    let filteredExperiences = [];

    let experiences = GetExperience();

    experiences.forEach((experience) => {
        if(experience.generalTags === undefined) {
            experience.generalTags = [];
        }
        if(experience.techTags === undefined) {
            experience.techTags = [];
        }
        if(experience.toolTags === undefined) {
            experience.toolTags = [];
        }
        if(experience.skillTags === undefined) {
            experience.skillTags = [];
        } 
        let allFilters = [...experience.generalTags, ...experience.techTags, ...experience.toolTags, ...experience.skillTags];

        let hasAllFilters = filters.length === 0 || filters.every((filter) => allFilters.includes(filter));
        if (hasAllFilters) {
            filteredExperiences.push(experience);
        }
    });
    return filteredExperiences;
}

export function getGeneralFilters(experiences, defaultFilter)
{
    let filters = [];

    experiences.forEach((experience) => {
        experience.generalTags.forEach((tag) => {
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
export function getTechFilters(experiences)
{
    let filters = [];

    experiences.forEach((experience) => {
        experience.techTags.forEach((tag) => {
            if(!filters.includes(tag)) {
                filters.push(tag);
            }
        });
    });

    return filters;
}
export function getToolFilters(experiences)
{
    let filters = [];

    experiences.forEach((experience) => {
        experience.toolTags.forEach((tag) => {
            if(!filters.includes(tag)) {
                filters.push(tag);
            }
        });
    });

    return filters;
}
export function getSkillFilters(experiences)
{
    let filters = [];

    experiences.forEach((experience) => {
        experience.skillTags.forEach((tag) => {
            if(!filters.includes(tag)) {
                filters.push(tag);
            }
        });
    });

    return filters;
}