import { useState, useEffect } from "react";
import "../Testimonials/testimonials.css";
import testimonials from "../../../data/testimonies";

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  function handleNext() {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }
  function handlePrevious() {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }

  return (
    <main id="">
      <div className="container testimonials_container">
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>

        <div>
          <div className="testimonial_card">
            <div className="testimonial_img">
              <img src={testimonials[current].img} />
            </div>

            <p className="test_img">{testimonials[current].name}</p>
            <p className="reviews">{testimonials[current].review}</p>
            <p className="reviews">{testimonials[current].profession}</p>
          </div>
          <div className="testimonial_dot">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? "active" : ""} `}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
          {/* <div className="testimonial_btn">
            <a onClick={() => handleNext()} className="btn btn-transparent">
              Next
            </a>
            <a onClick={() => handlePrevious()} className="btn btn-primary">
              Previous
            </a>
          </div> */}
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
