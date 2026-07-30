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
export default function experienceComponent({id, role, organization, summary, Team, startdate, endDate, tags, relevantLinks, details}) {
    return (
        <div>
            <h1>{role}</h1>
            <h2>{organization}</h2>
            <h3>{Team}</h3>
            <p>{summary}</p>
            <p>{startdate} - {endDate}</p>
            <ul>
                {tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
            <ul>
                {details.map((sentence, index) => (
                    <li key={index}>{sentence}</li>
                ))}
            </ul>
        </div>
    );
}