import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import "./Burger.css";

type Anchor = "top" | "left" | "bottom" | "right";

const Burger: React.FC = () => {
  const TemporaryDrawer = () => {
    const [state, setState] = React.useState({
      left: false,
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
      <Box sx={{ width: 250 }} role="presentation">
        <List sx={{ margin: "0", padding: "0" }}>
          <nav className="burger-nav">
            <ul className="burger-nav-links">
              <li className="burger-nav-links__link">
                colection
                <div className="burger-colection">
                  <Link to="/winter-fall" className="link">
                    <div
                      className="burger-nav-colection__link"
                      onClick={toggleDrawer(anchor, false)}
                      onKeyDown={toggleDrawer(anchor, false)}
                    >
                      зима-осень
                    </div>
                  </Link>

                  <div
                    className="burger-nav-colection__link"
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                  >
                    весна
                  </div>

                  <div
                    className="burger-nav-colection__link"
                    onClick={toggleDrawer(anchor, false)}
                    onKeyDown={toggleDrawer(anchor, false)}
                  >
                    лето
                  </div>
                </div>
              </li>

              <li
                className="burger-nav-links__link"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
              >
                <Link
                  to="/about-us"
                  className="link"
                  style={{ color: "#2b2f4c" }}
                >
                  about us
                </Link>
              </li>

              <li className="burger-nav-links__link">
                contacts
                <div className="burger-contacts">
                  <div className="burger-nav-colection__link">
                    Address: 37372 Hood St Sandy, OR 97123
                  </div>
                  <div className="burger-nav-colection__link">
                    Phone: 800-456-7890
                  </div>
                  <div className="burger-nav-colection__link">
                    Email: info@yoursite.com
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </List>
      </Box>
    );

    return (
      <div className="burger">
        {(["left"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <img
                className="cart-icon"
                alt="img"
                src={require("../../../svg/burger.svg").default}
                width="25"
              ></img>
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

export default Burger;
