import { Link } from "react-router-dom";

import Cart from "../../cart/Cart";
import { LoginRegistrBlockProps } from "./types";

const LoginRegisterBlock = ({ img, name, isLogin }: LoginRegistrBlockProps) => {
  return (
    <div className="login-register-block">
      {img && <img className="headerAvatar" src={img} alt="img" />}

      <div className="login-register">
        {isLogin ? (
          <Link className="link" to="/account">
            <div className="user-name" style={{ color: "#2b2f4c" }}>
              {"Hi, " + name}
            </div>
          </Link>
        ) : (
          <Link
            className="link"
            style={{ color: "#2b2f4c" }}
            to="/login-registration-body"
          >
            LOGIN
          </Link>
        )}
      </div>

      <Cart />
    </div>
  );
};

export default LoginRegisterBlock;
