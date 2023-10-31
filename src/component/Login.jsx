import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

const init = {
  username: "",
  email: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "inputvalue":
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      throw new Error();
  }
}

export default function Login() {
  const navigate = useNavigate();
  const [value, input] = useReducer(reducer, init);

  const handlevalue = (e) => {
    input({
      type: "inputvalue",
      field: e.target.name,
      payload: e.target.value,
    });
  };
  React.useEffect(() => {
    if (localStorage.getItem("auth")) navigate("login");
  }, []);
  const formSubmitter = (e) => {
    e.preventDefault();
    console.log(value.username);
    if (value.username === "ranjith") {
      navigate("login");
      localStorage.setItem("auth", true);
    }
  };

  return (
    <>
      <h1>Login page</h1>
      <form>
        <input
          name="username"
          value={value.username}
          onChange={(e) => handlevalue(e)}
          type="text"
        />
        <input
          name="email"
          type="email"
          value={value.email}
          onChange={(e) => handlevalue(e)}
        />
        <button onClick={formSubmitter}>login</button>
      </form>
    </>
  );
}
