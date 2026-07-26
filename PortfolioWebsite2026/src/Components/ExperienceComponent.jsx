/*
id: ,
role: ,
company: ,
summary: ,
Team: ,
startdate: ,
endDate: ,
techTags:[],
otherTags: [],
relevantLinks: [],
experienceSentences: [],
*/
export default function experienceComponent({id, role, company, summary, Team, startdate, endDate, techTags, otherTags, relevantLinks, experienceSentences}) {
    return (
        <div>
            <h1>{role}</h1>
            <h2>{company}</h2>
            <h3>{Team}</h3>
            <p>{summary}</p>
            <p>{startdate} - {endDate}</p>
        </div>
    );
}