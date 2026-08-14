/*
id: ,
role: ,
organization: ,
summary: ,
Team: ,
startdate: ,
endDate: ,
generalTags: [],
techTags:[],
toolTags: [],
skillTags: [],
relevantLinks: [],
assets: [],
details: [],
*/

/*Relevant links structure
{display: "",
address: ""
}
*/

const Experience = [
    /*Work Experience*/
    {
        id: 1,
        role: "Generalist Programmer",
        organization: "Ubisoft Winnipeg",
        summary: "Development of custom internal tools in various languages to support the development of Rainbow Six Mobile",
        Team: "Rainbow Six Mobile Tools Team",
        startdate: "2024-04",
        endDate: "2026-06",
        generalTags: ["Work", "Application Development", "Game Development", "UI Development", "CI/CD",],
        techTags: ["Unity", "C#", "WPF", "MaxScript", "XML", "JSON"],
        toolTags: ["Gitlab", "Perforce", "Jira", "Confluence"],
        skillTags: [ "Technical Design", "User Feedback", "Mentorship", "Technical Documentation"],
        relevantLinks: [{display: "Global Launch Trailer", address: "https://www.youtube.com/watch?v=qKjRJyfnTyY"}, {display: "R6M Official Website", address: "https://www.ubisoft.com/en-ca/game/rainbow-six/mobile"}, {display: "Google Play", address: "https://play.google.com/store/apps/details?id=com.ubisoft.rainbowsixmobile.r6.fps.pvp.shooter&pli=1"}],
        assets: ["/R6SplashPage.jpg", "/GoogleImages1.jpg", "/GoogleImages2.png", "GoogleImages3.png"],
        details: [
            "Led design and development of a WPF tool allowing artists across 3 teams to compress and manage 2D assets.",
            " Maintained custom asset creation pipelines that enabled design teams to produce hundreds of cosmetics for every 8-week season.",
            "Collaborated with a distributed team of designers, gameplay programmers, and testers to redesign data caching methods for over 10,000 project files.",
            "Oversaw a major season release, collaborating with the live ops teams to verify and push assets at each stage as well as to identify and fix critical issues on a two week timeline.",
            "Mentored a co-operative education student, providing them with ongoing feedback and support for their term.",
            "Documented the behaviours of a custom CI/CD pipeline to assist teams across the project in tracing data issues back to potential sources.",
            "Worked with a variety of source control tools including Gitlab and Perforce."
        ]
    },
    {
        id: 2,
        role: "Generalist Programmer",
        organization: "Ubisoft Winnipeg",
        summary: "Development of player-facing UI elements including controls, messaging, and feedback",
        Team: "Rainbow Six Mobile HUD Team",
        startdate: "2023-01",
        endDate: "2024-03",
        generalTags: ["Work", "Game Development", "Mobile Development", "UI Development"],
        techTags: ["Unity", "C#", "JSON"],
        toolTags: ["Perforce","Jira", "Confluence"],
        skillTags: ["Test Design"],
        relevantLinks: [{display: "Global Launch Trailer", address: "https://www.youtube.com/watch?v=qKjRJyfnTyY"}, {display: "R6M Official Website", address: "https://www.ubisoft.com/en-ca/game/rainbow-six/mobile"}, {display: "Google Play", address: "https://play.google.com/store/apps/details?id=com.ubisoft.rainbowsixmobile.r6.fps.pvp.shooter&pli=1"}],
        assets: ["/R6SplashPage.jpg", "/GoogleImages1.jpg", "/GoogleImages2.png", "GoogleImages3.png"],
        details: [
            "Redesigned controller support systems to allow for a variety of customization options for players and designers.",
            "Developed UI features for new operators to allow players to better utilize operator abilities during a match.",
            "Created test cases for complex interactions between game  controls and user settings, allowing designers and programmers to come to a shared understanding of intended behaviours.",,
            "Worked with a variety of source control tools including Gitlab and Perforce.",
            "Managed tasks and automation using Jira "
        ]
    },
    {
        id: 3,
        role: "Co-Operative Education Student",
        organization: "Ubisoft Winnipeg",
        summary: "Development of player-facing UI elements including controls, messaging, and feedback",
        Team: "Rainbow Six Mobile HUD Team",
        startdate: "2021-04",
        endDate: "2021-08",
        generalTags: ["Work", "Game Development", "Mobile Development"],
        techTags: ["Unity", "C#"],
        toolTags: ["Perforce"],
        skillTags: ["Test Design"],
        relevantLinks: [{display: "Global Launch Trailer", address: "https://www.youtube.com/watch?v=qKjRJyfnTyY"}, {display: "R6M Official Website", address: "https://www.ubisoft.com/en-ca/game/rainbow-six/mobile"}, {display: "Google Play", address: "https://play.google.com/store/apps/details?id=com.ubisoft.rainbowsixmobile.r6.fps.pvp.shooter&pli=1"}],
        assets: ["/R6SplashPage.jpg", "/GoogleImages1.jpg", "/GoogleImages2.png", "GoogleImages3.png"],
        details: [
            "Upgraded complex Unity systems to allow more adaptability and data storage while considering dependencies and project stability.",
            "Worked closely with quality control to ensure submitted code was high quality and any bugs were fixed before they affected other developers or clients.",
            "Coordinated with a large team in multiple studios to create a cohesive project.",
        ]
    },
    {
        id: 4,
        role: "Co-Operative Education Student",
        organization: "151 Research Inc. aka AGCO Winnipeg",
        summary: "Development of user portal and integrated grain management systems",
        Team: "GrainVue Team",
        startdate: "2020-09",
        endDate: "2020-12",
        generalTags: ["Work", "Web Development", "Integrated Development"],
        techTags: ["React", "Typescript", "JavaScript", "Redux"],
        toolTags: ["Windows"],
        skillTags: ["Unit Tests"],
        relevantLinks: [{display: "GrainVue Product Tour", address: "https://youtu.be/3IAyAunpm1U?si=pyS0iJo1w-Z5ARnU"}, {display: "GrainVue", address: "https://www.grainsystems.com/na/en/campaigns/grainvue/"}, {display: "AGCO", address: "https://www.agcocorp.com/us/en/home.html"}],
        assets: ["/GrainVuePlaceholder"],
        details: [
            "Developed a new method of deciding what scans to upload from imbedded BeagleBone boards to give users up-to date data and give developers more freedom in adapting scanning tasks.",
            "Redesigned and organized redux systems to make them easier to maintain and upgrade. ",
            "Designed and implemented unit tests to ensure reliability of customer portal.",
        ]
    },
    {
        id: 5,
        role: "Co-Operative Education Student",
        organization: "Bold Commerce",
        summary: "Full stack development of tools and APIs for other Bold Developers",
        Team: "Headless API Team",
        startdate: "2020-01",
        endDate: "2020-04",
        generalTags: ["Work", "Web Development"],
        techTags: ["GoLang", "React", "Typescript", "JavaScript", "Redux"],
        toolTags: ["Mac"],
        skillTags: ["Unit Tests", "Snapshot Testing"],
        relevantLinks: [{display: "GrainVue Product Tour", address: "https://youtu.be/3IAyAunpm1U?si=pyS0iJo1w-Z5ARnU"}, {display: "GrainVue", address: "https://www.grainsystems.com/na/en/campaigns/grainvue/"}, {display: "AGCO", address: "https://www.agcocorp.com/us/en/home.html"}],
        assets: ["/GrainVuePlaceholder"],
        details: [
            "Partnered with a team member on a self-directed project making changes to an administrative application to make life easier for Bold developers and the Mayhem team.",
            "Enhanced UI of Bold applications by fixing bugs noticed on unrelated tickets as well as an attention to detail on bug fixes. ",
            "Improved front-end snapshot testing framework by noticing and investigating discrepancies.",
            "Adapted to team reorganization and a language switch as well as a move to remote work.",
            "Worked with command line Git tools for source control"
        ]
    },
    /*TODO Add Pre co-op experience*/

    /*Volunteer Experience*/
    {
        id: 100,
        role: "President",
        organization: "University of Manitoba Computer Science Association",
        summary: "Elected to lead UMCSSA in its mandate of forwarding the interests of computer science undergraduate students and improving their student experience.",
        Team: "",
        startdate: "2021-04",
        endDate: "2022-04",
        generalTags: ["Volunteering", "Leadership"],
        techTags: [],
        toolTags: [],
        skillTags: ["Event Planning", "Team Management", "Public Speaking", "Community Engagement", "Communication", "Budgeting", "Mentorship"],
        relevantLinks: [{display: "UMCSSA Website", address: "https://umanitobacssa.ca/"}],
        assets: ["/CSSALogo.svg"],
        details: [
            "Hosted a variety of new virtual events to allow members to continue building community and learning new skills during lockdown, including a Game Jam and job skills workshops.", 
            "Improved UMCSSA’s industry ties by building & maintaining strong partnerships with local companies such as Bold, Ubisoft, SkipTheDishes, and iQmetrix. ",
            "Strengthened communications between U of M Computer Science student groups to enable cooperation, resource sharing, and joint events.",
            "Mentored incoming executive members before and after their election to help develop their skills and confidence, and to ensure a smooth transition."
        ]
    },
    {
        id: 101,
        role: "President",
        organization: "University of Manitoba Women in Computer Science Advisory Board",
        summary: "Elected to lead UMWICS in its mandate of addressing the gender imbalance present in the CS community in Manitoba.",
        Team: "",
        startdate: "2020-01-01",
        endDate: "2023-12-31",
        generalTags: ["Volunteering", "Leadership"],
        techTags: [],
        toolTags: [],
        skillTags: ["Event Planning", "Team Management", "Public Speaking", "Community Engagement"],
        relevantLinks: [],
        assets: [],
        details: ["lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
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
        generalTags: ["Projects"],
        techTags: ["Unity", "C#", "WPF", "MaxScript", "XML", "JSON", "Git", "Perforce"],
        toolTags: [],
        skillTags: [],
        relevantLinks: [],
        assets: [],
        details: ["lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
    },
    {
        id: 201,
        role: "Delegate",
        organization: "One Young World",
        summary: "Responsible for developing and maintaining software applications.",
        Team: "Rainbow Six Mobile HUD Team",
        startdate: "2020-01-01",
        endDate: "2023-12-31",
        generalTags: ["Projects"],
        techTags: ["Unity", "C#", "WPF", "MaxScript", "XML", "JSON", "Git"],
        toolTags: [],
        skillTags: [],
        relevantLinks: [],
        assets: [],
        details: ["lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
    },
    {
        id: 202,
        role: "a",
        organization: "b",
        summary: "Responsible for developing and maintaining software applications.",
        Team: "Rainbow Six Mobile Tools Team",
        startdate: "2020-01-01",
        endDate: "2023-12-31",
        generalTags: ["Projects"],
        techTags: ["Unity", "C#", "WPF", "MaxScript", "XML", "JSON", "Git", "Perforce", "test"],
        toolTags: [],
        skillTags: [],
        relevantLinks: [],
        assets: [],
        details: ["lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
    },
    {
        id: 203,
        role: "c",
        organization: "d",
        summary: "Responsible for developing and maintaining software applications.",
        Team: "Rainbow Six Mobile Tools Team",
        startdate: "2020-01-01",
        endDate: "2023-12-31",
        generalTags: ["Projects"],
        techTags: ["Unity", "C#", "WPF", "MaxScript", "XML", "JSON", "Git", "Perforce", "test", "test2"],
        toolTags: [],
        skillTags: [],
        relevantLinks: [],
        assets: [],
        details: ["lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
    },
    {
        id: 204,
        role: "e",
        organization: "f",
        summary: "Responsible for developing and maintaining software applications.",
        Team: "Rainbow Six Mobile Tools Team",
        startdate: "2020-01-01",
        endDate: "2023-12-31",
        generalTags: ["Projects"],
        techTags: ["Unity", "C#", "WPF", "MaxScript", "XML", "JSON", "Git", "Perforce", "test2"],
        toolTags: [],
        skillTags: [],
        relevantLinks: [],
        assets: [],
        details: ["lorem ipsum dolor sit amet, consectetur adipiscing elit.", "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]
    },
]

export default function getExperience() {
    return Experience;
}