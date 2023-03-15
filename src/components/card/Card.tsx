import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { cardProps } from "./type";
import { useAppDispatch } from "../../hooks";
import { showMessage } from "../toast/show-message";
import FavoriteIcon from "../favorite-icon/FavoriteIcon";
import { addShoeInCart } from "../../store/account-sclice/accountSlice";

import "./Card.css";

const Card: React.FC<cardProps> = ({
  name,
  img,
  id,
  price,
  totalPrice,
  count,
  setId,
}) => {
  const [shoeSize, setShoeSize] = useState<number | null>(null);
  const [colorSize40, setColorSize40] = useState<boolean>(false);
  const [colorSize41, setColorSize41] = useState<boolean>(false);
  const [colorSize42, setColorSize42] = useState<boolean>(false);
  const [colorSize43, setColorSize43] = useState<boolean>(false);
  const [colorSize44, setColorSize44] = useState<boolean>(false);
  const [colorSize45, setColorSize45] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
      setColorSize40(false);
      setColorSize41(false);
      setColorSize42(false);
      setColorSize43(false);
      setColorSize44(false);
      setColorSize45(false);
    }
  };

  const mouseLeave = () => {
    setShoeSize(null);
    setColorSize40(false);
    setColorSize41(false);
    setColorSize42(false);
    setColorSize43(false);
    setColorSize44(false);
    setColorSize45(false);
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
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <FavoriteIcon
          name={name}
          price={price}
          shoeSize={shoeSize}
          id={id}
          count={count}
          totalPrice={totalPrice}
          img={img}
        />
        <div className="contentBx">
          <h2>{name}</h2>
          <div className="size">
            {/* <p>Size :</p> */}
            <span
              style={{
                backgroundColor: colorSize40 ? " #2b2f4c" : "",
                color: colorSize40 ? "white" : "",
              }}
              onClick={() => {
                setShoeSize(40);
                setColorSize40(true);
                setColorSize41(false);
                setColorSize42(false);
                setColorSize43(false);
                setColorSize44(false);
                setColorSize45(false);
              }}
            >
              40
            </span>
            <span
              style={{
                backgroundColor: colorSize41 ? " #2b2f4c" : "",
                color: colorSize41 ? "white" : "",
              }}
              onClick={() => {
                setShoeSize(41);
                setColorSize40(false);
                setColorSize41(true);
                setColorSize42(false);
                setColorSize43(false);
                setColorSize44(false);
                setColorSize45(false);
              }}
            >
              41
            </span>
            <span
              style={{
                backgroundColor: colorSize42 ? " #2b2f4c" : "",
                color: colorSize42 ? "white" : "",
              }}
              onClick={() => {
                setShoeSize(42);
                setColorSize40(false);
                setColorSize41(false);
                setColorSize42(true);
                setColorSize43(false);
                setColorSize44(false);
                setColorSize45(false);
              }}
            >
              42
            </span>
            <span
              style={{
                backgroundColor: colorSize43 ? " #2b2f4c" : "",
                color: colorSize43 ? "white" : "",
              }}
              onClick={() => {
                setShoeSize(43);
                setColorSize40(false);
                setColorSize41(false);
                setColorSize42(false);
                setColorSize43(true);
                setColorSize44(false);
                setColorSize45(false);
              }}
            >
              43
            </span>
            <span
              style={{
                backgroundColor: colorSize44 ? " #2b2f4c" : "",
                color: colorSize44 ? "white" : "",
              }}
              onClick={() => {
                setShoeSize(44);
                setColorSize40(false);
                setColorSize41(false);
                setColorSize42(false);
                setColorSize43(false);
                setColorSize44(true);
                setColorSize45(false);
              }}
            >
              44
            </span>
            <span
              style={{
                backgroundColor: colorSize45 ? " #2b2f4c" : "",
                color: colorSize45 ? "white" : "",
              }}
              onClick={() => {
                setShoeSize(45);
                setColorSize40(false);
                setColorSize41(false);
                setColorSize42(false);
                setColorSize43(false);
                setColorSize44(false);
                setColorSize45(true);
              }}
            >
              45
            </span>
          </div>
          <div className="price">
            <div>Price:</div>
            <div>{price + "$"}</div>
          </div>
          <div className="cardButton" onClick={addShoe}>
            Buy Now
          </div>
          <div
            className="cardButton"
            onClick={toInfo}
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
