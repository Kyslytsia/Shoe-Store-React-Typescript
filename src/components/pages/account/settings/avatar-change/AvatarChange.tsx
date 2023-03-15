import { useState } from "react";
import Avatar from "react-avatar-edit";

import { useAppDispatch } from "../../../../../hooks";
import { setImage } from "../../../../../store/account-sclice/accountSlice";

import "./AvatarChange.css";

const AvatarChange: React.FC = () => {
  const [preview, setPreview] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleImage = () => {
    dispatch(setImage(preview));
  };

  const onClose = () => {
    setPreview("");
  };

  const onCrop = (view: any) => {
    setPreview(view);
  };

  return (
    <div className="avatarChange">
      <h2>Change Avatar</h2>

      <Avatar width={250} height={250} onCrop={onCrop} onClose={onClose} />

      {preview ? (
        <button className="avatarChangeBtn" onClick={handleImage}>
          send
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default AvatarChange;
