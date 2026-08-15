import Slideshow from "./SlideshowComponent";
import "../Styles/ExperienceComponent.css";
import { useState, useEffect } from "react";

export default function experienceComponent({ id, role, organization, summary, team, startdate, endDate, generalTags, techTags, toolTags, skillTags, relevantLinks, assets, details }) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div className="experienceComponent">
            <div style={{ display: "flex", alignItems: "center"}}>
                <div style={{ textAlign: "right", padding: "20px", width: "60%" }}>
                    <h1>{role}</h1>
                    <h2>{organization}</h2>
                    {team !== undefined && <h3>{Team}</h3>}
                    <p>{summary}</p>
                    {!(endDate === "")? 
                    <p>{startdate} - {endDate}</p> : 
                    <p>{startdate}</p>}
                </div>
                <div style={{ width: "40%", overflow: "hidden", marginTop: "40px", marginRight: "20px" }}>
                    <Slideshow images={assets} />
                </div>
            </div>
            
            {relevantLinks.length > 0 && (
                <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                    <h4>Links: </h4>
                    {relevantLinks.map((link, index) => (
                        <div>
                            <a href={link.address} target="_blank">{link.display}</a>
                        </div>
                    ))}
                </div>
            )}

            {expanded &&
            <ul style={{ listStylePosition: "inside" }}>
                { details.map((sentence, index) => (
                    <li key={index}>{sentence}</li>
                ))}
            </ul>
            }
            <button onClick={()=> setExpanded(!expanded)}>{expanded? "Minimize Details" : "Expand details" }</button>

            {generalTags.length > 0 &&
                <div className="tagList">
                    <h4>General Tags:</h4>
                    <p>|</p>
                    {generalTags.map((tag, index) => (
                        <p key={index}>|{tag}|</p>
                    ))}
                    <p>|</p>
                </div>
            }
            {techTags.length > 0 &&
                <div className="tagList">
                    <h4>Technical Tags: </h4>
                    <p>|</p>
                    {techTags.map((tag, index) => (
                        <p key={index}>|{tag}|</p>
                    ))}
                    <p>|</p>
                </div>
            }
            {toolTags.length > 0 &&
                <div className="tagList">
                    <h4>Tool Tags: </h4>
                    <p>|</p>
                    {toolTags.map((tag, index) => (
                        <span key={index}>|{tag}|</span>
                    ))}
                    <p>|</p>
                </div>
            }
            {skillTags.length > 0 &&
                <div className="tagList">
                    <h4>Skill Tags: </h4>
                    <p>|</p>
                    {skillTags.map((tag, index) => (
                        <span key={index}>|{tag}|</span>
                    ))}
                    <p>|</p>
                </div>
            }
        </div>
    );
}