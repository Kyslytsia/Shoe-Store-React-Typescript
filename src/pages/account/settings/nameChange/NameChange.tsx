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
          style={{ width: "300px" }}
          className="input"
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
        />
      </label>

      <button
        className="avatarChangeBtn"
        onClick={submitName}
        type="button"
        style={{ width: "200px" }}
      >
        change name
      </button>
    </div>
  );
};

export default NameChange;
