import "../Experience/experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const frontendskills = [
    { skill: "HTML", level: "Experienced" },
    { skill: "CSS", level: "Experienced" },
    { skill: "JavaScript", level: "Experienced" },
    { skill: "React", level: "Experienced" },
    { skill: "Tailwind", level: "Experienced" },
  ];
  const embeddedskills = [
    { skill: "Arduino", level: "Intermediate" },
    { skill: "Basic Electronics", level: "Intermediate" },
  ];
  return (
    <main id="portfolio" data-aos="zoom-in-up">
      <section className="container experience">
        <div className="experience_heading">
          <h5>WHAT SKILLS I HAVE</h5>
          <h2>My Experience</h2>
        </div>
        <div className="experience_container">
          <div className="experience_frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
              {frontendskills.map(({ skill, level }) => (
                <div className="exp-div" key={skill}>
                  <BsFillPatchCheckFill className="checker_icon" />
                  <article className="experience_details">
                    <h4>{skill}</h4>
                    <small className="text-light">{level}</small>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <div className="experience_embedded">
            <h3>Basic Election</h3>
            <div className="experience_content">
              {embeddedskills.map(({ skill, level }) => (
                <div className="exp-div" key={skill}>
                  <BsFillPatchCheckFill className="checker_icon" />
                  <article className="experience_details">
                    <h4>{skill}</h4>
                    <small className="text-light">{level}</small>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Experience;
