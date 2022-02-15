import React, { useState } from "react";

export const Form = ({ addMessage }) => {
  const [text, setText] = useState("");
  const handleText = (ev) => {
    ev.preventDefault();
    addMessage({ text, author: "User" });
    setText("");
  };
  return (
    <form onSubmit={handleText}>
      <input
        type="text"
        value={text}
        onChange={(ev) => setText(ev.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};
