import React from "react";
import { Link } from "react-router-dom";

import { BurgerNavProps } from "../types";

const season = ["winter-fall", "spring", "summer"];

const ColectionLink = ({ position, isOpen }: BurgerNavProps) => {
  return (
    <li className="burger-nav-links__link">
      colection
      <div className="burger-colection">
        {season.map((season) => (
          <Link to="/winter-fall" className="link">
            <div
              className="burger-nav-colection__link"
              onClick={isOpen(position, false)}
            >
              {season}
            </div>
          </Link>
        ))}
      </div>
    </li>
  );
};

export default ColectionLink;
