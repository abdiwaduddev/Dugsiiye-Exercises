import { useState } from "react";

const ToggleButton = () => {
  const [toggle, setToggele] = useState(true);

  const ChangeButton = () => {
    setToggele(!toggle);
  };
  return (
    <div>
      <h1>The button is {toggle ? "ON" : "OFF"}</h1>
      <button onClick={ChangeButton}>{toggle ? "Turn OFF" : "TURN ON"}</button>
    </div>
  );
};

export default ToggleButton;
