import { useNavigate } from "react-router-dom";
import { FormEventHandler, useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { login } from "../../../store/account-sclice/accountSlice";

import "./Login.css";
import { showMessage } from "../../../components/toast/show-message";

const Login: React.FC = () => {
  const users = useAppSelector((state) => state.users.value);
  const [userEmail, setUserEmail] = useState<string>("ivan@gmail.com");
  const [userPassword, setUserPassword] = useState<string>("123");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const submitForm: FormEventHandler = (event) => {
    event.preventDefault();

    const userExist = users.find((el) => el.email === userEmail);

    if (userExist) {
      if (userExist.password === userPassword) {
        dispatch(login(userExist));
        navigate("/account");
      } else {
        showMessage.error("Wrong password", { position: "top-center" });
      }
    }

    if (!userExist) {
      showMessage.error("This email not exist", { position: "top-center" });
    }
  };

  return (
    <form className="login" onSubmit={submitForm}>
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

      <button className="form-button" type="submit">
        LogIn
      </button>
    </form>
  );
};

export default Login;
