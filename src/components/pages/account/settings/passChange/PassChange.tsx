import { useState } from "react";

import { showMessage } from "../../../../toast/show-message";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import { changePass } from "../../../../../store/user-sclice/userSlice";

import "./PassChange.css";

const PassChange = () => {
  const [password, setPassword] = useState<string>();
  const [passwordVerify, setVerifyPassword] = useState<string>();

  const email = useAppSelector((state) => state.account.value.email);
  const dispatch = useAppDispatch();

  const submitPass = () => {
    const verifyPassword = password === passwordVerify;

    if (verifyPassword) {
      dispatch(
        changePass({
          email: email,
          password: password,
        })
      );
      setPassword("");
      setVerifyPassword("");
      showMessage.success("Password changed", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="passChange">
      <h2>Change Password</h2>

      <label className="label">
        <input
          style={{ width: "300px" }}
          className="input"
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
        />
      </label>

      <label className="label">
        <input
          style={{ width: "300px" }}
          className="input"
          name="password"
          type="password"
          value={passwordVerify}
          onChange={(event) => setVerifyPassword(event.target.value)}
          placeholder="Verify Password"
        />
      </label>

      <button
        onClick={submitPass}
        className="avatarChangeBtn"
        type="button"
        style={{ width: "200px" }}
      >
        change Password
      </button>
    </div>
  );
};

export default PassChange;
