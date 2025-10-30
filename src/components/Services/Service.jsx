import "../Services/service.css";
import { FaCheck } from "react-icons/fa";

const Service = () => {
  return (
    <main className="container service" id="service">
      <div className="service_heading">
        <h5>What I offer</h5>
        <h2>Services</h2>
      </div>
      <secttion className="services_rendered">
        {/* service 1 */}
        <div className="service_item">
          <h3>Web Development</h3>
          <p>
            <FaCheck />I create responsive and user-friendly websites using
            modern web technologies like HTML, CSS, JavaScript, and React.
          </p>
        </div>
        {/* service 2 */}
        <div className="service_item">
          <h3>Basic Electronics</h3>
          <p>
            <FaCheck />I design and build basic electronic circuits and devices,
            including microcontroller programming and PCB design.
          </p>
        </div>
      </secttion>
    </main>
  );
};

export default Service;
