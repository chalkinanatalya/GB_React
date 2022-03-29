import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authProfile } from "../store/profile/actions";
import { Redirect } from "react-router-dom";

export const SignIn = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (login !== "gb" || password !== "gb") {
      setError("Invalid login or password");
    } else {
      dispatch(authProfile(true));
      //   return <Redirect to="/chats" />;
      props.history.push("/chats");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Login:</p>
      <input type="text" onChange={(e) => setLogin(e.target.value)} />
      <p>Password:</p>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button type="submit">Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};
