import { useAppDispatch } from "../../hooks";
import { countPlus, countMinus } from "../../store/account-sclice/accountSlice";

import "./Count.css";

type countProps = {
  count: number;
  id: number;
  price: number;
  shoeSize: number | null;
};

const Count: React.FC<countProps> = ({ count, id, price, shoeSize }) => {
  const dispatch = useAppDispatch();

  const increase = (id: number) => {
    dispatch(countPlus({ count, id, price, shoeSize }));
  };

  const reduce = (id: number) => {
    dispatch(countMinus({ count, id, price, shoeSize }));
  };

  return (
    <div className="count-block">
      <div className="counter" onClick={() => reduce(id)}>
        -
      </div>

      {count}

      <div className="counter" onClick={() => increase(id)}>
        +
      </div>
    </div>
  );
};

export default Count;
