import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authProfile } from "../store/profile/actions";
import { Link, Redirect } from "react-router-dom";
import { signUp } from "../services/firebase";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //   const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signUp(email, password);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>You need to sign up</h1>
      <p>Email</p>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <p>Password:</p>
      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      <button type="submit">Register</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};
