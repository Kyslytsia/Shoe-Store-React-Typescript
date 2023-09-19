import Card from "../../components/card/Card";
import { useAppSelector } from "../../hooks";

import "./WinterFall.css";

type WinterFallProps = {
  setId: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const WinterFall: React.FC<WinterFallProps> = ({ setId }) => {
  const shoes = useAppSelector((state) => state.shoes.value);

  return (
    <div className="winter-fall">
      <h1>Winter/Fall</h1>

      <div className="winter-fall__conteiner">
        {shoes.map((shoe) => (
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
