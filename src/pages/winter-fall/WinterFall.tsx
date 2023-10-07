import { WinterFallProps } from "./types";
import { shoesData } from "../../shoesData";
import Card from "../../components/card/Card";

import "./WinterFall.css";

const WinterFall: React.FC<WinterFallProps> = ({ setId }) => {
  return (
    <div className="winter-fall">
      <h1>Winter/Fall</h1>

      <div className="winter-fall__conteiner">
        {shoesData.map((shoe) => (
          <div className="card-block" key={shoe.id}>
            <Card
              name={shoe.name}
              img={shoe.img}
              id={shoe.id}
              price={shoe.price}
              totalPrice={shoe.totalPrice}
              count={shoe.count}
              setId={setId}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinterFall;
