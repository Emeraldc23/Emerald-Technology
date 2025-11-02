import "../About/about.css";
import Profilepics from "../../assets/profile_pics.jpg";
import { FaUserTie, FaUsers, FaFolderOpen } from "react-icons/fa";
import { useEffect, useState } from "react";

const About = () => {
  const [visible, setVisible] = useState(false);

  // Fade-in effect when the component mounts
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const cardIcon = [
    {
      icons: <FaUserTie />,
      cardHeader: "Experience",
      cardText: "2+ Years Working",
    },
    {
      icons: <FaUsers />,
      cardHeader: "Clients",
      cardText: "10+ Happy Clients",
    },
    {
      icons: <FaFolderOpen />,
      cardHeader: "Projects",
      cardText: "20+ Completed Projects",
    },
  ];

  return (
    <main
      className={`about ${visible ? "visible" : ""}`}
      id="about"
      data-aos="zoom-in"
    >
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-contents">
        {/* --- Left Side (Image) --- */}
        <div className="about-image">
          <img src={Profilepics} alt="Profile" />
        </div>

        {/* --- Right Side (Cards + Text) --- */}
        <div className="card-right">
          <div className="card-container">
            {cardIcon.map((card, i) => (
              <div key={i} className="about-cards">
                <span className="card-icon">{card.icons}</span>
                <h5>{card.cardHeader}</h5>
                <p>{card.cardText}</p>
              </div>
            ))}
          </div>
          <p className="about-text">
            My passion for frontend development is not only reflected in my
            experience but also in the enthusiasm and dedication I bring to tech
            projects. I have been opportuned to collaborate with prestigious
            organizations, contributing to their success and growth.
          </p>
          <button className="about-btn">Let's Talk</button>
        </div>
      </div>
    </main>
  );
};

export default About;
