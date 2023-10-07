import * as types from "./type";

import "./ActiveItem.css";

const ActiveItem: React.FC<types.ActionsItemProps> = ({
  id,
  img,
  name,
  price,
  count,
  shoeSize,
  totalPrice,
}) => {
  return (
    <div className="active-item">
      <div
        style={{
          width: "140px",
          height: "200px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className="active-item__info">
        <div className="info-name">{name}</div>

        <div>
          <div>size: {shoeSize}</div>
          <div>quantity: {count}</div>
          <div>price: {price}$</div>
          <div>total price: {totalPrice}$</div>
        </div>
      </div>
    </div>
  );
};

export default ActiveItem;
