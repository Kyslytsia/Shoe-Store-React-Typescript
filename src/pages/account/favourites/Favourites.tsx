import * as types from "./type";
import { useAppSelector } from "../../../hooks";
import Card from "../../../components/card/Card";

import "./Favorites.css";

const Favorites: React.FC<types.FavouritesProps> = ({ setId }) => {
  const favorites = useAppSelector((state) => state.account.value.favorites);

  return (
    <>
      <h1 style={{ marginLeft: "40px" }}>Favorites</h1>

      <div className="favorites-conteiner">
        {favorites.map((shoe: any) => (
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
    </>
  );
};

export default Favorites;
