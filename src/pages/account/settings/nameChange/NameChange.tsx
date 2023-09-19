import { useState } from "react";

import { useAppDispatch } from "../../../../hooks";
import { showMessage } from "../../../../components/toast/show-message";
import { changeName } from "../../../../store/account-sclice/accountSlice";

import "./NameChange.css";

const NameChange = () => {
  const [name, setName] = useState<string>("");

  const dispatch = useAppDispatch();

  const submitName = () => {
    dispatch(changeName(name));
    setName("");
    showMessage.success("Name changed", {
      position: "top-center",
    });
  };

  return (
    <div className="nameChange">
      <h2>Change Name</h2>

      <label className="label">
        <input
          name="name"
          type="text"
          value={name}
          className="input"
          placeholder="Name"
          style={{ width: "300px" }}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <button
        type="button"
        onClick={submitName}
        style={{ width: "200px" }}
        className="avatarChangeBtn"
      >
        change name
      </button>
    </div>
  );
};

export default NameChange;
