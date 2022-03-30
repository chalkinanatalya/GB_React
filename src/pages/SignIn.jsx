import React, { useState } from "react";

import { Link } from "react-router-dom";
import { logIn } from "../services/firebase";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await logIn(email, password);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <p>Login:</p>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <p>Password:</p>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Login</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <br />
      <Link to="/signup">
        <button type="submit">Sign Up</button>
      </Link>
    </>
  );
};
