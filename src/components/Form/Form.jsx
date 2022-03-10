import React, { useState } from "react";
import IconButton from "@mui/material/Button";
import Input from "@mui/material/Input";
import SendIcon from '@mui/icons-material/Send';

export const Form = ({ addMessage, author}) => {
  const [text, setText] = useState("");

  const handleText = (ev) => {
    ev.preventDefault();
    addMessage({ text, author: author });
    setText("");
  };
  return (
    <>
    <form onSubmit={handleText}>
      <Input
        type="text"
        value={text}
        autoFocus={true}
        onChange={(ev) => setText(ev.target.value)}
      />
      <IconButton aria-label="send" size="small" type="submit">
        <SendIcon />
      </IconButton>
    </form>
    </>
  );
};
