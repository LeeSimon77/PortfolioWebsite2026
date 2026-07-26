import ExperienceComponent from "../ExperienceComponent.jsx";
import getWorkExperience from "../../Data/WorkExperience.js";

export default function WorkExperiencePage() {
    const workExperience = getWorkExperience();

  return (
    <div>
        <h1>Work Experience</h1>
        {workExperience.map((experience) => (
            <ExperienceComponent key={experience.id} {...experience} />
        ))}
    </div>
  );
}