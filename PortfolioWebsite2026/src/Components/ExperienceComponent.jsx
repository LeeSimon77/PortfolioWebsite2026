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
            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{width: "50%", textAlign: "right", margin:"20px" }}>
                    <h1>{role}</h1>
                    <h2>{organization}</h2>
                    <h3>{Team}</h3>
                    <p>{summary}</p>
                    <p>{startdate} - {endDate}</p>
                </div>
                <div style={{width: "50%", textAlign:"left", margin:"10px"}}>
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