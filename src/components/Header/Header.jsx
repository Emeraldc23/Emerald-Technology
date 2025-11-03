import "../Header/header.css";
import Profilepics from "../../assets/profile_pics.jpg";
import cv from "../../assets/CV-EMC.pdf";
import Socials from "../socials/socials";

const Header = () => {
  return (
    <header className="header" id="home" data-aos="fade-down">
      <div className="container header-container">
        <div className="introduction">
          <h5 className="hello">Hello, I'm</h5>
          <h2>Maduagwu Martins</h2>
          <h5 className="niche text-light">
            Frontend Developer / Arduino Programmer (Embedded Systems)
          </h5>
        </div>
        <div className="cv-docs">
          <a href={cv} className="cv btn" download>
            Download CV
          </a>

          <a href="#contact" className="connect-me btn">
            Let's Talk
          </a>
        </div>
        <div className="header-img">
          <img src={Profilepics} alt="" />
        </div>
        <div className="side-view">
          <Socials />
          <div className="scroll-down">
            <a href="#contact" className="scroll">
              Scroll Down
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
