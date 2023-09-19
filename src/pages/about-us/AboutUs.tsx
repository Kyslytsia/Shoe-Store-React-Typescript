import "./AboutUs.css";

import { cobblers } from "./mock";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <div className="about-us__block-1">
        <h1>Who We Are</h1>
        <div>
          Our primary goal is our satisfied customers, and we make every effort
          to be clear and responsive to their needs. When you to do business
          with our shoe repair, we will do our best to provide quality work at
          fair prices. Save your favorite pair of shoes by letting us bring them
          back to life.
        </div>
      </div>

      <div className="about-us__block-2">
        <div className="about-us__block-2__image"></div>
        <div className="about-us__block-2__info">
          <h2>Shoe Repair</h2>
          <p>
            Since 2020, we have been providing the quality shoe repair and our
            proud family tradition continues today. Come to us and will see how
            the most experienced shoe repair company can make your favorite
            comfortable shoes look like new again! We offer everything from
            dying and cleaning to complete custom shoe repair to make any pair
            of shoes or boots like new again.
          </p>
          <p>
            Quisque non metus at libero dictum tincidunt sit amet id turpis.
            Phasellus ut mattis neque, sit amet lobortis enim. Integer fringilla
            tincidunt sapien, non malesuada nibh maximus facilisis. Cras vel sem
            nec risus pharetra sagittis. Curabitur viverra tellus ut sapien
            hendrerit pulvinar. Nullam sed quam enim.
          </p>
        </div>
      </div>

      <div className="about-us__block-3">
        <h2>Our Cobblers & Craftsmen</h2>

        <div className="about-us__block-3__cards">
          {cobblers.map((cobbler) => (
            <div className="cards__card">
              <div
                className="card__image"
                style={{
                  backgroundImage: `url(${cobbler.img})`,
                }}
              ></div>

              <div className="card__info">
                <h4>{cobbler.name}</h4>
                <div>
                  <img
                    className="instagram"
                    alt="img"
                    src={require("../../svg/instagram.svg").default}
                    width="25"
                  ></img>

                  <img
                    className="facebook"
                    alt="img"
                    src={require("../../svg/facebook.svg").default}
                    width="25"
                  ></img>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
