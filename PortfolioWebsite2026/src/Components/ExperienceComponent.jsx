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
experienceSentences: [],
*/
export default function experienceComponent({id, role, organization, summary, Team, startdate, endDate, techTags, otherTags, relevantLinks, experienceSentences}) {
    return (
        <div>
            <h1>{role}</h1>
            <h2>{organization}</h2>
            <h3>{Team}</h3>
            <p>{summary}</p>
            <p>{startdate} - {endDate}</p>
        </div>
    );
}