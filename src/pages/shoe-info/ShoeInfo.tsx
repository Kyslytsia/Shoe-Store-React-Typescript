import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ShoeInfoProps } from "./types";
import { shoesData } from "../../shoesData";
import { useAppDispatch } from "../../hooks";
import Size from "../../components/card/size/Size";
import { showMessage } from "../../components/toast/show-message";
import { addShoeInCart } from "../../store/account-sclice/accountSlice";

import "./ShoeInfo.css";

const ShoeInfo = ({ id }: ShoeInfoProps) => {
  const [shoeSize, setShoeSize] = useState<number | null>(null);
  const [coloredSize, setColoredSize] = useState<number | null>(null);

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
      shoesData.map((shoe) => {
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
      {shoesData.map((shoe) => {
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
                    <Size
                      coloredSize={coloredSize}
                      setShoeSize={setShoeSize}
                      setColoredSize={setColoredSize}
                    />
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
