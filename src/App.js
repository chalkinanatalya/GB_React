import React, { useEffect, useState } from "react";
import style from "./App.module.css";
import { Form } from "./components/Form/Form";
import { Message } from "./components/Message/Message.jsx";
import { MessageList } from "./components/MessageList/MessageList";
import { nanoid } from "nanoid";

const defaultMessages = [
  {
    id: nanoid(),
    author: "bot",
    text: "Choose a number from 1 to 9 and you'll get your answer",
  },
];

const botAnswers = [
  {
    id: nanoid(),
    author: "bot",
    question: "1",
    text: "It is certain",
  },
  {
    id: nanoid(),
    author: "bot",
    question: "2",
    text: "No chanses",
  },

  {
    id: nanoid(),
    author: "bot",
    question: "3",
    text: "It is decidedly so",
  },

  {
    id: nanoid(),
    author: "bot",
    question: "4",
    text: "I don't know the answer, try another number",
  },

  {
    id: nanoid(),
    author: "bot",
    question: "5",
    text: "Do not count on it",
  },

  {
    id: nanoid(),
    author: "bot",
    question: "6",
    text: "My sources say no",
  },

  {
    id: nanoid(),
    author: "bot",
    question: "7",
    text: "Outlook not so good",
  },

  {
    id: nanoid(),
    author: "bot",
    question: "8",
    text: "Signs point to yes",
  },

  {
    id: nanoid(),
    author: "bot",
    question: "9",
    text: "You'll get it",
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
  });

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
      <div className={style.background}>
        <Message />
        <MessageList messages={messages} />
        <Form addMessage={addMessages} />
      </div>
    </>
  );
};

export default App;
