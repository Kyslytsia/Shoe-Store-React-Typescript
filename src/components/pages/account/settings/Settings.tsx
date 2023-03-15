import NameChange from "./nameChange/NameChange";
import PassChange from "./passChange/PassChange";
import AvatarChange from "./avatar-change/AvatarChange";

import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings" style={{ padding: "0 30px" }}>
      <AvatarChange />
      <PassChange />
      <NameChange />
    </div>
  );
};

export default Settings;
