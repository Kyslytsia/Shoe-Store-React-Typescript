import { useAppSelector } from "../../../hooks";
import ActionsItem from "./active-item/ActiveItem";

import "./Active.css";

const Actions: React.FC = () => {
  const actions = useAppSelector((state) => state.account.value.active);

  return (
    <div className="actions">
      <h1 className="actions-title">My actives</h1>

      <div>
        {actions.map((el) => (
          <ActionsItem
            id={el.id}
            key={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
            count={el.count}
            shoeSize={el.shoeSize}
            totalPrice={el.totalPrice}
          />
        ))}
      </div>
    </div>
  );
};

export default Actions;
