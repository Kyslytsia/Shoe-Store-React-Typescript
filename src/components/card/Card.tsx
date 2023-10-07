import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Size from "./size/Size";
import { CardProps } from "./type";
import { useAppDispatch } from "../../hooks";
import { showMessage } from "../toast/show-message";
import FavoriteIcon from "../favorite-icon/FavoriteIcon";
import { addShoeInCart } from "../../store/account-sclice/accountSlice";

import "./Card.css";

const Card = ({
  id,
  img,
  name,
  price,
  count,
  setId,
  totalPrice,
}: CardProps) => {
  const [shoeSize, setShoeSize] = useState<number | null>(null);
  const [coloredSize, setColoredSize] = useState<number | null>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const addShoe = () => {
    if (shoeSize === null) {
      showMessage.error("Укажите размер обуви", {
        position: "top-center",
      });
    } else {
      dispatch(
        addShoeInCart({ name, price, shoeSize, id, count, totalPrice, img })
      );
      setShoeSize(null);
    }
  };

  const mouseLeave = () => {
    setShoeSize(null);
    setColoredSize(null);
  };

  const toInfo = () => {
    navigate("/shoe-info");
    setId(id);
  };

  return (
    <div className="container" onMouseLeave={mouseLeave}>
      <div
        className="card"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `url(${img})`,
        }}
      >
        <FavoriteIcon
          id={id}
          img={img}
          name={name}
          price={price}
          count={count}
          shoeSize={shoeSize}
          totalPrice={totalPrice}
        />

        <div className="contentBx">
          <h2>{name}</h2>

          <Size
            coloredSize={coloredSize}
            setShoeSize={setShoeSize}
            setColoredSize={setColoredSize}
          />

          <div className="price">
            <div>Price:</div>
            <div>{price + "$"}</div>
          </div>

          <div className="cardButton" onClick={addShoe}>
            Buy Now
          </div>

          <div
            onClick={toInfo}
            className="cardButton"
            style={{ marginLeft: "10px" }}
          >
            Info
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
