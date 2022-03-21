import React, { useCallback, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
import { nanoid } from 'nanoid';

import { getProfileName } from "../store/profile/selectors";
import { MessageList } from '../components/MessageList/MessageList';
import { ChatList } from "../components/ChatList/ChatList";
import { Form } from '../components/Form/Form';
import { chatZero } from '../chats/chat0';
import { chatOne } from '../chats/chat1';

const initialChats = [
  {
    name: "chat0",
    messages: chatZero,
    author:  "Bot #0",
  },
  {
    name: "chat1",
    messages: chatOne,
    author: "Bot #1",
  }, 
]

export const Chats = ({ messages, setMessages, addChat, deleteChat }) => {
  const chatId = useParams().chatId;
  const chatName = useParams().chatName;
  const author = useSelector(getProfileName, shallowEqual);

  const addMessages = useCallback(
    ({ text, author }) => {
      if (chatId) {
        setMessages((prevMessages) => {
          return {
            ...prevMessages,
            [chatId]: [
              ...prevMessages[chatId],
              {
                id: nanoid(),
                author,
                text,
              },
            ],
          };
        });
      }
    },
    [chatId, setMessages]
  );

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length &&
      messages[chatId][messages[chatId].length - 1].author === author
    ) {
      let message;
      let user;
      for (const chat of initialChats) {
        if (chatName === chat.name) {
          message = chat.messages.find(
          (message) =>
            message.question === messages[chatId][messages[chatId].length - 1].text).text;
          user = chat.author;
          break;
        } else {
          message = "Im BOT";
          user = "BOT";
        };
      }
      const timeout = setTimeout(
        () =>
        addMessages({
            text: message,
            author: user,
          }),
        1000
      );

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages, chatId, addMessages]);

  if (chatId && !messages[chatId]) {
    return <Redirect to="/chats" />;
  }

  return (
    <>
      <ChatList addChat={addChat} deleteChat={deleteChat} />
      <MessageList
        messages={chatId ? messages[chatId] : []}
      />
      <Form addMessage={addMessages} author={author}/>
    </>
  );
};
