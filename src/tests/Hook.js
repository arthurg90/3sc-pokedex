import { useState } from "react";

const Toggle = () => {
  const [toggled, setToggled] = useState(false);
  const toggle = () => setToggled(!toggled);

  return <button onClick={toggle}>{toggled ? "Toggled" : "Toggle"}</button>;
};

export default Toggle;
