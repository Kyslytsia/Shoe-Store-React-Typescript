import { useAppSelector } from "../../../../hooks";
import ActionsItem from "./active-item/ActiveItem";

import "./Active.css";

const Actions: React.FC = () => {
  const actions = useAppSelector((state) => state.account.value.active);

  return (
    <div className="actions">
      <h1 style={{ marginLeft: "40px" }}>My actives</h1>

      <div>
        {actions.map((el) => (
          <ActionsItem
            key={el.id}
            name={el.name}
            price={el.price}
            shoeSize={el.shoeSize}
            id={el.id}
            count={el.count}
            totalPrice={el.totalPrice}
            img={el.img}
          />
        ))}
      </div>
    </div>
  );
};

export default Actions;
