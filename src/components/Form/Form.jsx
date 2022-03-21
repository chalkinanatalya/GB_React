import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { addMessageWithThunk } from "../../store/messages/actions";
import { getProfileName } from "../../store/profile/selectors";
import { Answer } from "./Answer";

import IconButton from "@mui/material/Button";
import Input from "@mui/material/Input";
import SendIcon from "@mui/icons-material/Send";

export const Form = () => {
  const chatId = useParams().chatId;
  const chatName = useParams().chatName;
  const author = useSelector(getProfileName, shallowEqual);

  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleText = (ev) => {
    ev.preventDefault();
    dispatch(
      addMessageWithThunk({ chatId, text, author }, Answer(chatName, text))
    );
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
