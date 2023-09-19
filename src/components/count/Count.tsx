import { useAppDispatch } from "../../hooks";
import { countPlus, countMinus } from "../../store/account-sclice/accountSlice";

import { CountProps } from "./types";

import "./Count.css";

const Count: React.FC<CountProps> = ({ count, id, price, shoeSize }) => {
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
