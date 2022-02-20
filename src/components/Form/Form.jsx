import React, { useState } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

export const Form = ({ addMessage }) => {
  const [text, setText] = useState("");
  const handleText = (ev) => {
    ev.preventDefault();
    addMessage({ text, author: "User" });
    setText("");
  };
  return (
    <form onSubmit={handleText}>
      <Input
        type="text"
        value={text}
        autoFocus={true}
        onChange={(ev) => setText(ev.target.value)}
      />
      <Button variant="contained" type="submit" color="success" size="small">
        Send
      </Button>
    </form>
  );
};
