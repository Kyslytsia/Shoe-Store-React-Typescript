import { reviews } from "./mock";

import "./Reviews.css";

const Reviews: React.FC = () => {
  return (
    <div className="reviews-conteiner">
      <h1 className="reviews-title">Our Clients Say</h1>

      <div className="reviews-columns">
        {reviews.map((review) => (
          <div className="reviews-column">
            <img
              src={require("../../../svg/quotes.svg").default}
              alt="svg"
              width="25"
            />

            <p>{review.review}</p>

            <h2>{review.name}</h2>

            <h3>{review.city}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
