import * as types from "./type";

import "./ActiveItem.css";

const ActiveItem: React.FC<types.actionsItemProps> = ({
  name,
  price,
  shoeSize,
  id,
  count,
  totalPrice,
  img,
}) => {
  return (
    <div className="active-item">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
          width: "150px",
        }}
      ></div>
      <div className="active-item__info">
        <h1>{name}</h1>
        <div>size: {shoeSize}</div>
        <div>quantity: {count}</div>
        <div>price: {price}$</div>
        <div>total price: {totalPrice}$</div>
      </div>
    </div>
  );
};

export default ActiveItem;
