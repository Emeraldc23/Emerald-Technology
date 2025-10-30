import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaHeart,
  FaEnvelope,
} from "react-icons/fa";
import "../Nav/nav.css";
import { useState } from "react";

const Nav = () => {
  const [activeClass, setActiveClass] = useState("home");

  const navIcons = [
    {
      id: "home",
      icon: <FaHome />,
      href: "#home",
    },
    {
      id: "about",
      icon: <FaUser />,
      href: "#about",
    },
    {
      id: "portfolio",
      icon: <FaBriefcase />,
      href: "#portfolio",
    },
    {
      id: "service",
      icon: <FaHeart />,
      href: "#service",
    },
    {
      id: "project",
      icon: <FaEnvelope />,
      href: "#project",
    },
  ];
  function handleActive(id) {
    setActiveClass((prev) => (prev === id ? null : id));
  }
  return (
    <nav>
      <div className="navItems">
        {navIcons.map((icons) => (
          <a
            key={icons.id}
            href={icons.href}
            onClick={() => handleActive(icons.id)}
            className={activeClass === icons.id ? "active" : ""}
          >
            {icons.icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
