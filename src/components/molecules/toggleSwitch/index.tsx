import { useState } from "react";
import "./toggleSwitch.scss";
const ToggleSwitch = () => {
  const [show, setShow] = useState(false);
  return (
    <label className="inputContainer">
      <input className="inputContainer--input" type="checkbox" />
      <span className="inputContainer--slider"></span>
    </label>
  );
};

export default ToggleSwitch;
