import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="links">
        <li className="links__link">
          colection
          <div className="colection">
            <Link to="/winter-fall" className="link">
              <div className="colection__link">зима-осень</div>
            </Link>

            <Link to="/winter-fall" className="link">
              <div className="colection__link">весна</div>
            </Link>

            <Link to="/winter-fall" className="link">
              <div className="colection__link">лето</div>
            </Link>
          </div>
        </li>

        <Link to="/about-us" className="link">
          <li className="links__link">about us</li>
        </Link>

        <li className="links__link">
          contacts
          <div className="contacts">
            <div className="colection__link">
              Address: 37372 Hood St Sandy, OR 97123
            </div>
            <div className="colection__link">Phone: 800-456-7890</div>
            <div className="colection__link">Email: info@yoursite.com</div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
