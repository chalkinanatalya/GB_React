import React, { useEffect, useState } from "react";
import style from "./App.module.css";
import { Form } from "./components/Form/Form";
import { Message } from "./components/Message/Message.jsx";
import { MessageList } from "./components/MessageList/MessageList";
import { nanoid } from "nanoid";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { botAnswers } from "./chats/botAnswers";
import { ChatList } from "./components/chatList/chatList";

const defaultMessages = [
  {
    id: nanoid(),
    author: "bot",
    text: "Choose a number from 1 to 9 and you'll get your answer",
  },
];

export const App = () => {
  const [messages, setMessages] = useState(defaultMessages);

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].author === "User") {
      const timeout = setTimeout(
        () =>
          addMessages({
            text: botAnswers.find(
              (defaultMessage) =>
                defaultMessage.question === messages[messages.length - 1].text
            ).text,
            author: "Bot",
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

  return (
    <>
      <div className={style.container}>
        <Message />
        <div className={style.allChats}>
          <ChatList />
          <div>
            <MessageList messages={messages} />
            <Form addMessage={addMessages} />
            <Typography component="legend">Rate us!</Typography>
            <Rating name="simple-controlled" />
          </div>
        </div>
      </div>
    </>
  );
};
