import "./Reviews.css";

const Reviews: React.FC = () => {
  return (
    <div className="reviews-conteiner">
      <h1 className="reviews-title">Our Clients Say</h1>
      <div className="reviews-columns">
        <div className="reviews-column">
          <img
            src={require("../../../svg/quotes.svg").default}
            alt="svg"
            width="25"
          />
          <p>
            Your team removed the stain and refinished my bag, it looks brand
            new. I was happy because it means so much to me. Thank you.
          </p>
          <h2>Thomas Mosley</h2>
          <h3>SAN FRANCISCO</h3>
        </div>

        <div className="reviews-column">
          <img
            src={require("../../../svg/quotes.svg").default}
            alt="svg"
            width="25"
          />
          <p>
            What an amazing job you did, cleaning up my daughter’s shoes. They
            look like new. You also repaired my favorite leather briefcase.
          </p>
          <h2>Gavin Morrison</h2>
          <h3>LOS ANGELES</h3>
        </div>

        <div className="reviews-column">
          <img
            src={require("../../../svg/quotes.svg").default}
            alt="svg"
            width="25"
          />
          <p>
            I have always received excellent service at a fair price. You went
            above and beyond any expectations. Thank you for care.
          </p>
          <h2>Natasha Powell</h2>
          <h3>NEY YORK</h3>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
