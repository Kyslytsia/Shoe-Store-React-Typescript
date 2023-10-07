import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { Position } from "./types";
import { showMessage } from "../toast/show-message";
import CartItemList from "./cart-item-list/CartItemList";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addShoeInActive } from "../../store/account-sclice/accountSlice";

import "./Cart.css";

const Cart = () => {
  const [state, setState] = React.useState({
    right: false,
  });
  const cart = useAppSelector((state) => state.account.value.cart);
  const totalPrice = cart.reduce((acc, shoe) => (acc += shoe.totalPrice), 0);

  const dispatch = useAppDispatch();

  const addToActive = () => {
    dispatch(addShoeInActive(cart));
    showMessage.success("Thank you for your purchase", {
      position: "top-center",
    });
  };

  const isOpenCart =
    (position: Position, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [position]: open });
    };

  return (
    <div>
      {(["right"] as const).map((position) => (
        <React.Fragment key={position}>
          <Button onClick={isOpenCart(position, true)}>
            <img
              alt="img"
              width="25"
              className="cart-icon"
              src={require("../../svg/cart.svg").default}
            ></img>

            {cart.length > 0 && (
              <div className="cart-length">{cart.length}</div>
            )}
          </Button>

          <Drawer
            anchor={position}
            open={state[position]}
            onClose={isOpenCart(position, false)}
          >
            <CartItemList
              cartData={cart}
              position={position}
              isOpenCart={isOpenCart}
              totalPrice={totalPrice}
              addToActive={addToActive}
            />
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Cart;
