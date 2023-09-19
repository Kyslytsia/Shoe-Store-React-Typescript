import { MouseEventHandler } from "react";

export type Position = "top" | "left" | "bottom" | "right";

export interface BurgerNavProps {
  position: Position;
  isOpen: (
    position: Position,
    open: boolean
  ) => MouseEventHandler<HTMLDivElement> | undefined;
}
