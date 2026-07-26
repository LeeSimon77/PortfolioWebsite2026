import getProjects from "../Data/Projects.js";
import ExperienceComponent from "../Components/ExperienceComponent.jsx";

export default function WorkExperiencePage() {
    const projects = getProjects();

  return (
    <div>
        <h1>Projects</h1>
        {projects.map((experience) => (
            <ExperienceComponent key={experience.id} {...experience} />
        ))}
    </div>
  );
}