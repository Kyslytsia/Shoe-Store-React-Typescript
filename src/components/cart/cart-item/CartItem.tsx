import Count from "../../count/Count";
import { useAppDispatch } from "../../../hooks";
import { deleteShoeInCart } from "../../../store/account-sclice/accountSlice";

import { CartItemProps } from "./types";

import "./CartItem.css";

const CartItem: React.FC<CartItemProps> = ({
  id,
  img,
  name,
  price,
  count,
  shoeSize,
  totalPrice,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="cart-item-body" key={name}>
      <div
        className="cart-img"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>

      <div className="cart-info">
        <div className="cart-name">{name}</div>
        <div className="cart-size">size: {shoeSize}</div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Count count={count} id={id} price={price} shoeSize={shoeSize} />

          <div className="span3">{totalPrice}$</div>
        </div>

        <img
          alt="img"
          width="25"
          className="delete"
          src={require("../../../svg/delete.svg").default}
          onClick={() => dispatch(deleteShoeInCart({ id, shoeSize }))}
        ></img>
      </div>
    </div>
  );
};

export default CartItem;
