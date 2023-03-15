import Count from "../../count/Count";
import { useAppDispatch } from "../../../hooks";
import { deleteShoeInCart } from "../../../store/account-sclice/accountSlice";

import "./CartItem.css";

type cartItemProps = {
  name: string;
  price: number;
  shoeSize: number | null;
  id: number;
  count: number;
  totalPrice: number;
  img: string;
};

const CartItem: React.FC<cartItemProps> = ({
  name,
  price,
  shoeSize,
  id,
  count,
  totalPrice,
  img,
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
          onClick={() => dispatch(deleteShoeInCart({ id, shoeSize }))}
          className="delete"
          alt="img"
          src={require("../../../svg/delete.svg").default}
          width="25"
        ></img>
      </div>
    </div>
  );
};

export default CartItem;
