import portfolio from "../../../data/data";
import "../Portfolio/portfolio.css";

const Portfolio = () => {
  return (
    <main id="portfolio" data-aos="zoom-in-up">
      <div className="container portfolio">
        <h5> My Recent Work</h5>
        <h2 className="section__title">Portfolio</h2>
        <div className="portfolio_projects">
          {portfolio.map((item) => (
            <div key={item.id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={item.img} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              {/*   <p>{item.description}</p> */}
              <div className="portfolio_item-cta">
                <a
                  href={item.gitHub}
                  className="btn btn-transparent btn_port"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={item.live}
                  className="btn btn-primary btn_port"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
