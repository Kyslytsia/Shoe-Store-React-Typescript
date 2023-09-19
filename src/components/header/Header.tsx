import * as React from "react";
import { Link } from "react-router-dom";

import Nav from "./nav/Nav";

import Burger from "./burger/Burger";
import { useAppSelector } from "../../hooks";

import "./Header.css";
import LoginRegisterBlock from "./login-register-block/LoginRegisterBlock";

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

      <Nav />

      <LoginRegisterBlock name={user.name} img={img} isLogin={isLogin} />
    </header>
  );
};

export default Header;
