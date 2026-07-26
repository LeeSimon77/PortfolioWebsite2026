import ExperienceComponent from "../Components/ExperienceComponent.jsx";
import getVolunteerExperience from "../Data/VolunteerExperience.js";

export default function VolunteerExperiencePage() {
    const volunteerExperience = getVolunteerExperience();

  return (
    <div>
        <h1>Volunteer Experience</h1>
        {volunteerExperience.map((experience) => (
            <ExperienceComponent key={experience.id} {...experience} />
        ))}
    </div>
  );
}