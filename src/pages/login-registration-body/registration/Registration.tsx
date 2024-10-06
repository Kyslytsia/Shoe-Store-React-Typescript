import { useNavigate } from "react-router-dom";
import { FormEventHandler, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addNewUser } from "../../../store/user-sclice/userSlice";
import { login } from "../../../store/account-sclice/accountSlice";
import { showMessage } from "../../../components/toast/show-message";

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
      <label className="label">
        <input
          name="name"
          type="text"
          value={userName}
          className="input"
          placeholder="Name"
          onChange={(event) => setUserName(event.target.value)}
        />
      </label>

      <label className="label">
        <input
          type="email"
          name="email"
          className="input"
          value={userEmail}
          placeholder="Email"
          onChange={(event) => setUserEmail(event.target.value)}
        />
      </label>

      <label className="label">
        <input
          name="password"
          type="password"
          className="input"
          value={userPassword}
          placeholder="Password"
          onChange={(event) => setUserPassword(event.target.value)}
        />
      </label>

      <label className="label">
        <input
          type="password"
          className="input"
          name="verify-password"
          value={userPasswordVerify}
          placeholder="Verify Password"
          onChange={(event) => setUserPasswordVerify(event.target.value)}
        />
      </label>

      <button className="form-button" type="submit">
        Registration
      </button>
    </form>
  );
};

export default Registration;
