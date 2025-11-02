import "../Footer/Footer.css";
import Socials from "../socials/socials";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="">
        <a href="#home" className="ft_logo">
          Emerald Tech
        </a>
        <ul className="footer_list">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Experience</a>
          </li>
          <li>
            <a href="">Service</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Testimonies</a>
          </li>
        </ul>
        <div className="footer_social">
          <Socials />
        </div>

        <div className="footer-copyright">
          <small>&copy; Emerald Tech. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
