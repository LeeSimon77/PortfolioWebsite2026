import Slideshow from "./SlideshowComponent";
import "../Styles/ExperienceComponent.css";
import { useState, useEffect } from "react";

export default function experienceComponent({ id, role, organization, summary, team, startdate, endDate, generalTags, techTags, toolTags, skillTags, relevantLinks, assets, details }) {
    const [detailsExpanded, setDetailsExpanded] = useState(false);
    return (
        <div className="experienceComponent">
            <div style={{ display: "flex", alignItems: "center"}}>
                <div style={{ textAlign: "right", padding: "20px", width: "40%" }}>
                    <h1 style={{lineHeight: "105%"}}>{role}</h1>
                    <h2>{organization}</h2>
                    {team !== undefined && <h3>{Team}</h3>}
                    <p style={{lineHeight: 1, padding: "5px"}}>{summary}</p>
                    {!(endDate === "")? 
                    <p>{startdate} - {endDate}</p> : 
                    <p>{startdate}</p>}
                </div>
                <Slideshow images={assets} />
            </div>
            
            {relevantLinks != undefined && relevantLinks.length > 0 && (
                <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                    <h4>Links: </h4>
                    {relevantLinks.map((link, index) => (
                        <div>
                            <a href={link.address} target="_blank">{link.display}</a>
                        </div>
                    ))}
                </div>
            )}

            {detailsExpanded &&
            <ul style={{ listStylePosition: "inside" }}>
                { details.map((sentence, index) => (
                    <li key={index}>{sentence}</li>
                ))}
            </ul>
            }
            <button onClick={()=> setDetailsExpanded(!detailsExpanded)}>{detailsExpanded? "Minimize Details" : "Expand details" }</button>

            {generalTags.length > 0 &&
                <div className="tagList">
                    <h5>General Tags:</h5>
                    {generalTags.map((tag, index) => (
                        <p key={index}>{index != 0? "|" : " "} {tag} </p>
                    ))}
                </div>
            }
            {techTags.length > 0 &&
                <div className="tagList">
                    <h5>Technical Tags: </h5>
                    {techTags.map((tag, index) => (
                        <p key={index}>{index != 0? "|" : " "} {tag} </p>
                    ))}
                </div>
            }
            {toolTags.length > 0 &&
                <div className="tagList">
                    <h5>Tool Tags: </h5>
                    {toolTags.map((tag, index) => (
                        <span key={index}>{index != 0? "|" : " "} {tag} </span>
                    ))}
                </div>
            }
            {skillTags.length > 0 &&
                <div className="tagList">
                    <h5>Skill Tags: </h5>
                    {skillTags.map((tag, index) => (
                        <span key={index}>{index != 0? "|" : " "} {tag} </span>
                    ))}
                </div>
            }
        </div>
    );
}