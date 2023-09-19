import Box from "@mui/material/Box";
import List from "@mui/material/List";
import styled from "styled-components";

import { CartItemListProps } from "./types";
import CartItem from "../cart-item/CartItem";

const CustomBox = styled(Box)({});

const CartItemList = ({
  position,
  cartData,
  isOpenCart,
  totalPrice,
  addToActive,
}: CartItemListProps) => (
  <CustomBox className="cart-box" role="presentation">
    <List sx={{ margin: "0", padding: "0" }}>
      <div className="cart-header" onClick={isOpenCart(position, false)}>
        <img
          alt="img"
          width="25"
          className="cart-icon"
          src={require("../../../svg/close.svg").default}
        ></img>

        <div> My Cart ({cartData.length} Items)</div>
      </div>

      <div className="cart">
        {cartData.map((el) => (
          <CartItem
            id={el.id}
            img={el.img}
            name={el.name}
            price={el.price}
            count={el.count}
            key={el.name + el.id}
            shoeSize={el.shoeSize}
            totalPrice={el.totalPrice}
          />
        ))}

        {cartData.length === 0 ? (
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

export default CartItemList;
