import { Link } from "react-router-dom";

import "./AboutUsHomePage.css";

const AboutUsHomePage: React.FC = () => {
  return (
    <div className="about-us-main-conteiner">
      <div className="about-us-main-conteiner_info">
        <h1>About Us</h1>

        <h3>The world’s largest and most recognized shoe repair company</h3>

        <div>
          Our primary goal is our satisfied customers, and we make every effort
          to be clear and responsive to their needs. We will do our best to
          provide quality work at fair prices. Save your favorite pair of shoes
          by letting us bring them back to life.
        </div>

        <button className="about-us-main-conteiner_info-button">
          <Link to="/about-us" className="link" style={{ color: "black" }}>
            More about us
          </Link>
        </button>
      </div>

      <div className="about-us-main-conteiner_img"></div>
    </div>
  );
};

export default AboutUsHomePage;
