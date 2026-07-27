/*
id: ,
role: ,
organization: ,
summary: ,
Team: ,
startdate: ,
endDate: ,
tags:[],
relevantLinks: [],
assets: [],
experienceSentences: [],
*/
const Experience = [
    /*Work Experience*/
    {
        id: 1,
        role: "Generalist Programmer",
        organization: "Ubisoft Winnipeg",
        summary: "Responsible for developing and maintaining software applications.",
        Team: "Rainbow Six Mobile Tools Team",
        startdate: "2020-01-01",
        endDate: "2023-12-31",
        tags: ["Work", "Unity", "C#", "WPF", "MaxScript", "XML", "JSON", "Git", "Perforce"],
        experienceSentences: ["lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
    },
    {
        id: 2,
        role: "Generalist Programmer",
        organization: "Ubisoft Winnipeg",
        summary: "Responsible for developing and maintaining software applications.",
        Team: "Rainbow Six Mobile HUD Team",
        startdate: "2020-01-01",
        endDate: "2023-12-31",
        tags: ["Work", "Unity", "C#", "WPF", "MaxScript", "XML", "JSON", "Git", "Perforce"],
        experienceSentences: ["lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
    },

    /*Volunteer Experience*/
     {
        id: 100,
        role: "President",
        organization: "University of Manitoba Computer Science Association",
        summary: "Responsible for developing and maintaining software applications.",
        Team: "Rainbow Six Mobile Tools Team",
        startdate: "2020-01-01",
        endDate: "2023-12-31",
        tags: ["Volunteering", "Unity", "C#", "WPF", "MaxScript", "XML", "JSON", "Git", "Perforce"],
        experienceSentences: ["lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
    },
    {
        id: 101,
        role: "President",
        organization: "University of Manitoba Women in Computer Science Board",
        summary: "Responsible for developing and maintaining software applications.",
        Team: "Rainbow Six Mobile HUD Team",
        startdate: "2020-01-01",
        endDate: "2023-12-31",
        tags: ["Volunteering", "Unity", "C#", "WPF", "MaxScript", "XML", "JSON", "Git", "Perforce"],
        experienceSentences: ["lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
    },

    /*Projects*/
    {
        id: 200,
        role: "Presenter",
        organization: "Spark",
        summary: "Responsible for developing and maintaining software applications.",
        Team: "Rainbow Six Mobile Tools Team",
        startdate: "2020-01-01",
        endDate: "2023-12-31",
        tags: ["Projects", "Unity", "C#", "WPF", "MaxScript", "XML", "JSON", "Git", "Perforce"],
        experienceSentences: ["lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
    },
    {
        id: 201,
        role: "Delegate",
        organization: "One Young World",
        summary: "Responsible for developing and maintaining software applications.",
        Team: "Rainbow Six Mobile HUD Team",
        startdate: "2020-01-01",
        endDate: "2023-12-31",
        tags: ["Projects", "Unity", "C#", "WPF", "MaxScript", "XML", "JSON", "Git"],
        experienceSentences: ["lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
    }
]

export default function getExperience() {
    return Experience;
}