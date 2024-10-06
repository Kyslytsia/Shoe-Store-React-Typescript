import { useState } from "react";

import Login from "./login/Login";
import Registration from "./registration/Registration";

import "./LoginRegistrationBody.css";

function LoginRegistrationBody() {
  const [index, setIndex] = useState<number>(0);

  const hendleClick = (index: number) => {
    setIndex(index);
  };
  return (
    <div className="login-registration">
      <div className="login-registration__body">
        <div className="body-nav">
          {["Login", "Registration"].map((tab, i) => (
            <div
              onClick={() => hendleClick(i)}
              className={
                index === i ? "body-nav__tab tab-line" : "body-nav__tab"
              }
            >
              {tab}
            </div>
          ))}
        </div>

        {index === 0 && <Login />}
        {index === 1 && <Registration />}
      </div>
    </div>
  );
}

export default LoginRegistrationBody;
