import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { showMessage } from "../../toast/show-message";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { addShoeInCart } from "../../../store/account-sclice/accountSlice";

import "./ShoeInfo.css";

type ShoeInfoProps = {
  id?: number;
};

const ShoeInfo: React.FC<ShoeInfoProps> = ({ id }) => {
  const shoes = useAppSelector((state) => state.shoes.value);
  const [shoeSize, setShoeSize] = useState<number | null>(null);
  const [colorSize40, setColorSize40] = useState<boolean>(false);
  const [colorSize41, setColorSize41] = useState<boolean>(false);
  const [colorSize42, setColorSize42] = useState<boolean>(false);
  const [colorSize43, setColorSize43] = useState<boolean>(false);
  const [colorSize44, setColorSize44] = useState<boolean>(false);
  const [colorSize45, setColorSize45] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof id === "undefined") {
      navigate("/");
    }
  }, [id, navigate]);

  const addShoe = () => {
    if (shoeSize === null) {
      showMessage.error("Select shoe size", {
        position: "top-center",
      });
    } else {
      shoes.map((shoe) => {
        if (shoe.id === id) {
          dispatch(addShoeInCart({ ...shoe, shoeSize }));
          showMessage.success("Thank you for your purchase", {
            position: "top-center",
          });
        }
        return "";
      });
    }
  };

  return (
    <div className="shoe-info">
      {shoes.map((shoe) => {
        if (shoe.id === id) {
          return (
            <div className="shoe-block" key={shoe.name}>
              <div
                className="shoe-block__img"
                style={{
                  backgroundImage: `url(${shoe.img})`,
                }}
              ></div>
              <div className="shoe-block__info">
                <h1>{shoe.name}</h1>

                <div>
                  <div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Molestias animi dolorem voluptate distinctio nemo velit
                    assumenda. Architecto facere voluptatem, reiciendis
                    consequuntur dolores quasi porro. Est neque deserunt quis in
                    fuga.Lorem ipsum dolor sit, amet consectetur adipisicing
                    elit. Molestias animi dolorem voluptate distinctio nemo
                    velit assumenda. Architecto facere voluptatem, reiciendis
                    consequuntur dolores quasi porro.
                  </div>

                  <div className="size-block">
                    <div className="size">
                      <h3>Size : </h3>
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
                  </div>

                  <div className="buy-block block">
                    <button className="button" onClick={addShoe}>
                      buy
                    </button>
                    <h2>price: {shoe.price}$</h2>
                  </div>
                </div>
              </div>
            </div>
          );
        }

        return "";
      })}
    </div>
  );
};

export default ShoeInfo;
