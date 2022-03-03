import React, { useEffect, useState } from "react";
import { Form } from "../Form/Form";
import { MessageList } from "../MessageList/MessageList";
import { nanoid } from "nanoid";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import { NoChat } from "../../pages/NoChat";

export const Chat = ({ chats }) => {
  const defaultMessages = [
    {
      id: nanoid(),
      author: "bot",
      text: "What do you want from me, human?",
    },
  ];
  const { chatId } = useParams();
  const [messages, setMessages] = useState(defaultMessages);

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].author === "User") {
      const timeout = setTimeout(
        () =>
          addMessages({
            text: chats[chatId].messages.find(
              (defaultMessage) =>
                defaultMessage.question === messages[messages.length - 1].text
            ).text,
            author: chats[chatId].messages[messages.length].author,
          }),
        1000
      );

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  const addMessages = ({ text, author }) => {
    setMessages([
      ...messages,
      {
        id: nanoid(),
        author,
        text,
      },
    ]);
  };
  if (!chats[chatId]) {
    return (
      <>
        <NoChat />
      </>
    );
  }

  return (
    <>
      <div>
        <MessageList messages={messages} />
        <Form addMessage={addMessages} />
        <Typography component="legend">Rate us!</Typography>
        <Rating name="simple-controlled" />
      </div>
    </>
  );
};
