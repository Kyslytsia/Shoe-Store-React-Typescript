import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as types from "./type";
import Avatar from "./avatar/Avatar";
import Active from "./actions/Active";
import Settings from "./settings/Settings";
import Favorites from "./favourites/Favourites";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setUserInfo } from "../../store/user-sclice/userSlice";
import { logout } from "../../store/account-sclice/accountSlice";

import "./Account.css";

const categories = ["my actions", "favorites", "settings", "exit"];

const Account: React.FC<types.AccountProps> = ({ setId }) => {
  const [index, setIndex] = useState<number>(1);
  const user = useAppSelector((state) => state.account.value);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = (index: number) => {
    setIndex(index);

    if (index === 3) {
      dispatch(setUserInfo(user));
      dispatch(logout());
      navigate("/");
    }
  };

  return (
    <div className="acc-body">
      <div className="acc-categories">
        <Avatar />

        {categories.map((category, index) => (
          <div
            onClick={() => handleClick(index)}
            className="acc-categories__category"
          >
            {category}
          </div>
        ))}
      </div>

      <div className="acc-pages">
        {index === 0 && <Active />}
        {index === 1 && <Favorites setId={setId} />}
        {index === 2 && <Settings />}
      </div>
    </div>
  );
};

export default Account;
