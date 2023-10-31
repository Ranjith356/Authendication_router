import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Loginoutputpage() {
  const navigate = useNavigate();
  const [logout, setLogout] = useState(false);

  React.useEffect(() => {
    if (!localStorage.getItem("auth")) navigate("/");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };
  return (
    <div>
      <h1>login successful😂</h1>
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
}
