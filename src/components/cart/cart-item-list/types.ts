import { MouseEventHandler } from "react";

export type Position = "top" | "left" | "bottom" | "right";

export interface CartItemListProps {
  position: Position;
  totalPrice: number;
  addToActive: () => void;
  cartData: CartDataProps[];
  isOpenCart: (
    position: Position,
    open: boolean
  ) => MouseEventHandler<HTMLDivElement> | undefined;
}

export interface CartDataProps {
  id: number;
  img: string;
  name: string;
  price: number;
  count: number;
  totalPrice: number;
  shoeSize: number | null;
}
