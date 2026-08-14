import Slideshow from "./SlideshowComponent";
import "../Styles/ExperienceComponent.css";

export default function experienceComponent({ id, role, organization, summary, team, startdate, endDate, generalTags, techTags, toolTags, skillTags, relevantLinks, assets, details }) {
    return (
        <div className="experienceComponent">
            <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                <div style={{ textAlign: "right", margin: "20px", width: "60%" }}>
                    <h1>{role}</h1>
                    <h2>{organization}</h2>
                    {team !== undefined && <h3>{Team}</h3>}
                    <p>{summary}</p>
                    <p>{startdate} - {endDate}</p>
                </div>
                <div style={{ width: "40%", overflow: "hidden", marginTop: "40px", marginRight: "20px" }}>
                    <Slideshow images={assets} />
                </div>
            </div>
            <ul style={{ listStylePosition: "inside" }}>
                {details.map((sentence, index) => (
                    <li key={index}>{sentence}</li>
                ))}
            </ul>
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