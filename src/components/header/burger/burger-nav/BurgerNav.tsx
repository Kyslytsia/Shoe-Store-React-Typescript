import React from "react";
import { Box, List } from "@mui/material";

import { BurgerNavProps } from "./types";
import AboutUsLink from "./about-us/AboutUsLink";
import Colection from "./colection/ColectionLink";
import ContactsLink from "./contacts/ContactsLink";

function BurgerNav({ position, isOpen }: BurgerNavProps) {
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List sx={{ margin: "0", padding: "0" }}>
        <nav className="burger-nav">
          <ul className="burger-nav-links">
            <Colection position={position} isOpen={isOpen} />
            <AboutUsLink position={position} isOpen={isOpen} />
            <ContactsLink />
          </ul>
        </nav>
      </List>
    </Box>
  );
}

export default BurgerNav;
