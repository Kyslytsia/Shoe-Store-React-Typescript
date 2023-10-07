import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { changePass } from "../../../../store/user-sclice/userSlice";
import { showMessage } from "../../../../components/toast/show-message";

import "./PassChange.css";

const PassChange = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordVerify, setVerifyPassword] = useState<string>("");

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
          name="password"
          type="password"
          value={password}
          className="input"
          placeholder="Password"
          style={{ width: "300px" }}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>

      <label className="label">
        <input
          name="password"
          type="password"
          className="input"
          value={passwordVerify}
          style={{ width: "300px" }}
          placeholder="Verify Password"
          onChange={(event) => setVerifyPassword(event.target.value)}
        />
      </label>

      <button
        type="button"
        onClick={submitPass}
        style={{ width: "200px" }}
        className="avatarChangeBtn"
      >
        change Password
      </button>
    </div>
  );
};

export default PassChange;
