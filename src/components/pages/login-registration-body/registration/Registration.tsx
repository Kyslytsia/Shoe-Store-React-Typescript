import { useNavigate } from "react-router-dom";
import { FormEventHandler, useState } from "react";

import { showMessage } from "../../../toast/show-message";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { addNewUser } from "../../../../store/user-sclice/userSlice";
import { login } from "../../../../store/account-sclice/accountSlice";

import "../login/Login.css";

const Registration: React.FC = () => {
  const users = useAppSelector((state) => state.users.value);

  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");
  const [userPasswordVerify, setUserPasswordVerify] = useState<string>("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitForm: FormEventHandler = (event) => {
    event.preventDefault();

    const userStatus = users.find((el) => el.status === true);
    const verifyPassword = userPassword === userPasswordVerify;
    const emailExist = users.find((el) => el.email === userEmail);

    if (!emailExist) {
      if (verifyPassword) {
        dispatch(
          addNewUser({
            name: userName,
            email: userEmail,
            password: userPassword,
          })
        );
      }

      if (userStatus) {
        dispatch(login(userStatus));
        navigate("/");
      }
    }

    if (!verifyPassword) {
      showMessage.error("Password mismatch", { position: "top-center" });
    }

    if (emailExist) {
      showMessage.error("This email already exist", { position: "top-center" });
    }
  };

  return (
    <form className="registration" onSubmit={submitForm}>
      <div className="form-title">Registration</div>

      <label className="label">
        <input
          className="input"
          type="text"
          name="name"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          placeholder="Name"
        />
      </label>

      <label className="label">
        <input
          className="input"
          type="email"
          name="email"
          value={userEmail}
          onChange={(event) => setUserEmail(event.target.value)}
          placeholder="Email"
        />
      </label>

      <label className="label">
        <input
          className="input"
          name="password"
          type="password"
          value={userPassword}
          onChange={(event) => setUserPassword(event.target.value)}
          placeholder="Password"
        />
      </label>

      <label className="label">
        <input
          className="input"
          name="verify-password"
          type="password"
          value={userPasswordVerify}
          onChange={(event) => setUserPasswordVerify(event.target.value)}
          placeholder="Verify Password"
        />
      </label>

      <button className="form-button" type="submit">
        Registration
      </button>
    </form>
  );
};

export default Registration;
