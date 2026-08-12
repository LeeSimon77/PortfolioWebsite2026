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
details: [],
*/
import Slideshow from "./SlideshowComponent";

export default function experienceComponent({id, role, organization, summary, Team, startdate, endDate, tags, relevantLinks, assets, details}) {
    return (
        <div>
            <div style={{display: "flex", alignItems: "center", width: "100%"}}>
                <div style={{textAlign: "right", margin:"20px", width: "60%"}}>
                    <h1>{role}</h1>
                    <h2>{organization}</h2>
                    <h3>{Team}</h3>
                    <p>{summary}</p>
                    <p>{startdate} - {endDate}</p>
                </div>
                <div style={{width: "40%", overflow: "hidden", marginTop: "40px", marginRight: "20px"}}>
                    <Slideshow images={assets}/>
                </div>
            </div>
            <div>
                <span>|</span>
                {tags.map((tag, index) => (
                    <span key={index}>| {tag} |</span>
                ))}
                <span>|</span>
            </div>
            <ul style={{listStylePosition: "inside"}}>
                {details.map((sentence, index) => (
                    <li key={index}>{sentence}</li>
                ))}
            </ul>
        </div>
    );
}