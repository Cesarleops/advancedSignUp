import { useContext, useState } from "react";
import "./toggleSwitch.scss";
import { PaginationContext } from "../../../context/PaginationContext";
const ToggleSwitch = () => {
  const { toggle } = useContext(PaginationContext);
  return (
    <label className="inputContainer">
      <input
        onChange={() => toggle()}
        className="inputContainer--input"
        type="checkbox"
      />
      <span className="inputContainer--slider"></span>
    </label>
  );
};

export default ToggleSwitch;
