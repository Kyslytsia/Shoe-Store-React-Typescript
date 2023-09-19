import { MouseEventHandler } from "react";

export type Position = "top" | "left" | "bottom" | "right";

export interface CartItemListProps {
  position: Position;
  totalPrice: number;
  cartData: cartData[];
  addToActive: () => void;
  isOpenCart: (
    position: Position,
    open: boolean
  ) => MouseEventHandler<HTMLDivElement> | undefined;
}

export interface cartData {
  id: number;
  img: string;
  name: string;
  price: number;
  count: number;
  totalPrice: number;
  shoeSize: number | null;
}
