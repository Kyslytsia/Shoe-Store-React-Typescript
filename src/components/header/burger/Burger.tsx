import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { Position } from "./types";
import BurgerNav from "./burger-nav/BurgerNav";

import "./Burger.css";

const Burger = () => {
  const TemporaryDrawer = () => {
    const [state, setState] = React.useState({
      left: false,
    });

    const isOpen =
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
      <div className="burger">
        {(["left"] as const).map((position) => (
          <React.Fragment key={position}>
            <Button onClick={isOpen(position, true)}>
              <img
                alt="img"
                width="25"
                className="cart-icon"
                src={require("../../../svg/burger.svg").default}
              ></img>
            </Button>

            <Drawer
              anchor={position}
              open={state[position]}
              onClose={isOpen(position, false)}
            >
              <BurgerNav position={position} isOpen={isOpen} />;
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
  };

  return TemporaryDrawer();
};

export default Burger;
