import "../Services/service.css";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheck } from "react-icons/fa";

const Service = () => {
  useEffect(() => {
    AOS.init({
      once: false,
      mirror: true,
      offset: 100,
      duration: 1000,
    });
  });

  const services = [
    {
      title: "Web Development",
      details: [
        "Responsive and mobile-friendly website design",
        "Frontend development using HTML, CSS, and JavaScript",
        "Building dynamic UIs with React",
        "Optimizing performance and accessibility",
        "Integrating APIs and deploying web apps",
      ],
      color: "#00993b",
      aos: "fade-up",
    },
    {
      title: "Basic Electronics",
      details: [
        "Designing and building electronic circuits",
        "Programming microcontrollers (Arduino)",
        "PCB layout and prototyping",
        "Integrating sensors and actuators in embedded projects",
      ],
      color: "#0086ff",
      aos: "fade-up",
    },
  ];
  return (
    <main className="container service" id="service" data-aos="slide-up">
      <div className="service_heading">
        <h5>What I offer</h5>
        <h2>Services</h2>
      </div>
      <section className="services_rendered">
        {services.map((service, index) => (
          <div
            key={index}
            className="service_item"
            data-aos={service.aos}
            data-aos-delay={index * 200}
          >
            <h3>{service.title}</h3>
            <ul>
              {service.details.map((item, i) => (
                <li key={i} className="list_items">
                  <FaCheck className="tick" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Service;
