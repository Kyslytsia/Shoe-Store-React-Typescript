import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import styled from "styled-components";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import CartItem from "./cart-item/CartItem";
import { showMessage } from "../toast/show-message";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addShoeInActive } from "../../store/account-sclice/accountSlice";

import "./Cart.css";

type Anchor = "top" | "left" | "bottom" | "right";

const CustomBox = styled(Box)({});

const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.account.value.cart);
  const totalPrice = cart.reduce((acc, shoe) => (acc += shoe.totalPrice), 0);
  const dispatch = useAppDispatch();

  const addToActive = () => {
    dispatch(addShoeInActive(cart));
    showMessage.success("Thank you for your purchase", {
      position: "top-center",
    });
  };

  const TemporaryDrawer = () => {
    const [state, setState] = React.useState({
      right: false,
    });

    const toggleDrawer =
      (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === "keydown" &&
          ((event as React.KeyboardEvent).key === "Tab" ||
            (event as React.KeyboardEvent).key === "Shift")
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

    const list = (anchor: Anchor) => (
      <CustomBox className="cart-box" role="presentation">
        <List sx={{ margin: "0", padding: "0" }}>
          <div
            className="cart-header"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <img
              className="cart-icon"
              alt="img"
              src={require("../../svg/close.svg").default}
              width="25"
            ></img>

            <div> My Cart ({cart.length} Items)</div>
          </div>

          <div className="cart">
            {cart.map((el) => (
              <CartItem
                key={el.name}
                name={el.name}
                price={el.price}
                shoeSize={el.shoeSize}
                id={el.id}
                count={el.count}
                totalPrice={el.totalPrice}
                img={el.img}
              />
            ))}
            {cart.length === 0 ? (
              <div className="amptyCart">cart is ampty</div>
            ) : (
              <div className="buy-block">
                <button onClick={addToActive}>Buy</button>
                <div className="totalPrice">Total price: {totalPrice}</div>
              </div>
            )}
          </div>
        </List>
      </CustomBox>
    );

    return (
      <div>
        {(["right"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <img
                className="cart-icon"
                alt="img"
                src={require("../../svg/cart.svg").default}
                width="25"
              ></img>

              {cart.length > 0 && (
                <div className="cart-length">{cart.length}</div>
              )}
            </Button>

            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
  };

  return TemporaryDrawer();
};

export default Cart;
