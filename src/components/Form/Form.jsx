import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// import { addMessageWithThunk } from "../../store/messages/actions";
import { getProfileName } from "../../store/profile/selectors";
import { Answer } from "./Answer";

import IconButton from "@mui/material/Button";
import Input from "@mui/material/Input";
import SendIcon from "@mui/icons-material/Send";
import { set } from "firebase/database";
import { getMessagesListRefId } from "../../services/firebase";
import { nanoid } from "nanoid";

export const Form = () => {
  const chatId = useParams().chatId;
  const chatName = useParams().chatName;
  const author = useSelector(getProfileName, shallowEqual);

  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (chatId) {
      const id = nanoid();
      set(getMessagesListRefId(chatId, id), {
        id,
        text,
        author,
      });
      // dispatch(
      //   addMessageWithThunk({ chatId, text, author }, Answer(chatName, text))
      // );
    }

    setText("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
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
