import ExperienceComponent from "./ExperienceComponent.jsx";
import getWorkExperience from "../Data/WorkExperience.js";

export default function ExperiencePage() {
    const workExperience = getWorkExperience();

  return (
    <div>
        <h1>Experience</h1>
        {workExperience.map((experience) => (
            <ExperienceComponent key={experience.id} {...experience} />
        ))}
    </div>
  );
}