import "./OurWorksHomePage.css";
import { Link } from "react-router-dom";

const OurWorksHomePage: React.FC = () => {
  return (
    <div className="our-work-conteiner">
      <h1 className="our-work-title">OUR WORK</h1>
      <div className="our-work-block">
        <div className="our-work-block__winter-fall">
          <div className="our-work-block__winter-fall-img"></div>
          <div className="our-work-button">
            <Link to="/winter-fall" className="link">
              winret/fall
            </Link>
          </div>
        </div>
        <div className="our-work-block__spring">
          <div className="our-work-block__spring-img"></div>
          <div className="our-work-button">spring</div>
        </div>
        <div className="our-work-block__summer">
          <div className="our-work-block__summer-img"></div>
          <div className="our-work-button">summer</div>
        </div>
      </div>
    </div>
  );
};

export default OurWorksHomePage;
