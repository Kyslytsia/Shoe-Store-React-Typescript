import * as React from "react";
import { Link } from "react-router-dom";

import Cart from "../cart/Cart";
import Burger from "./burger/Burger";
import { useAppSelector } from "../../hooks";

import "./Header.css";

const Header: React.FC = () => {
  const user = useAppSelector((state) => state.account.value);
  const img = useAppSelector((state) => state.account.value.img);
  const isLogin = useAppSelector((state) => state.account.value.status);

  return (
    <header className="header">
      <Link
        style={{ display: "flex", alignItems: "center" }}
        to="/"
        className="title-icon link"
      >
        <div>
          <Burger />
        </div>
        SHOES
      </Link>

      <div className="header-info-block">
        <nav className="nav">
          <ul className="links">
            <li className="links__link">
              colection
              <div className="colection">
                <Link to="/winter-fall" className="link">
                  <div className="colection__link">зима-осень</div>
                </Link>
                <div className="colection__link">весна</div>
                <div className="colection__link">лето</div>
              </div>
            </li>

            <li className="links__link">about us</li>

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

        <div className="login-register-block">
          {img && <img className="headerAvatar" src={img} alt="img" />}

          <div className="login-register">
            {isLogin ? (
              <Link className="link" to="/account">
                <div className="user-name" style={{ color: "#2b2f4c" }}>
                  {"Hi, " + user.name}
                </div>
              </Link>
            ) : (
              <Link
                style={{ color: "#2b2f4c" }}
                className="link"
                to="/login-registration-body"
              >
                LOGIN
              </Link>
            )}
          </div>

          <Cart />
        </div>
      </div>
    </header>
  );
};

export default Header;
