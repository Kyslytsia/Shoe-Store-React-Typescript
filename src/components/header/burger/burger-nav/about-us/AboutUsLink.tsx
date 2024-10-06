import { Link } from "react-router-dom";

import { BurgerNavProps } from "../types";

const AboutUsLink = ({ position, isOpen }: BurgerNavProps) => {
  return (
    <li
      className="burger-nav-links__link"
      onClick={() => isOpen(position, false)}
    >
      <Link to="/about-us" className="link" style={{ color: "#2b2f4c" }}>
        about us
      </Link>
    </li>
  );
};

export default AboutUsLink;
