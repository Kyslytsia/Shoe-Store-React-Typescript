import { useAppSelector } from "../../../../hooks";

import "./Avatar.css";

const Avatar = () => {
  const image = useAppSelector((state) => state.account.value.img);
  const user = useAppSelector((state) => state.account.value);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        className="avatar"
        src={image ? image : require("../../../../svg/avatar.svg").default}
        alt="img"
      ></img>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );
};

export default Avatar;
