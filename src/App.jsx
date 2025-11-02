import { use, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
import Service from "./components/Services/Service";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      mirror: true,
    });

    window.addEventListener("load", AOS.refresh);
  }, []);

  return (
    <>
      <div className="main-content">
        <Header />
        <Nav />
        <About />
        <Experience />
        <Service />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
