/*
id: ,
role: ,
organization: ,
summary: ,
Team: ,
startdate: ,
endDate: ,
techTags:[],
otherTags: [],
relevantLinks: [],
assets: [],
experienceSentences: [],
*/
const volunteerExperience = [
    {
        id: 0,
        role: "President",
        organization: "University of Manitoba Computer Science Association",
        summary: "Responsible for developing and maintaining software applications.",
        Team: "Rainbow Six Mobile Tools Team",
        startdate: "2020-01-01",
        endDate: "2023-12-31",
        techTags: ["Unity", "C#", "WPF", "MaxScript", "XML", "JSON", "Git", "Perforce"],
        otherTags: ["App Design", "Software Development", "User Testing"],
        experienceSentences: ["lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
    },
    {
        id: 1,
        role: "President",
        organization: "University of Manitoba Women in Computer Science Board",
        summary: "Responsible for developing and maintaining software applications.",
        Team: "Rainbow Six Mobile HUD Team",
        startdate: "2020-01-01",
        endDate: "2023-12-31",
        techTags: ["Unity", "C#", "WPF", "MaxScript", "XML", "JSON", "Git", "Perforce"],
        otherTags: ["App Design", "Software Development", "User Testing"],
        experienceSentences: ["lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
    }
]

export default function getVolunteerExperience() {
    return volunteerExperience;
}