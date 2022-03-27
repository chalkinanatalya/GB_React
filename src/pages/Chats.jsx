import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectMessages } from "../store/messages/selectors";

import { MessageList } from "../components/MessageList/MessageList";
import { ChatList } from "../components/ChatList/ChatList";
import { Form } from "../components/Form/Form";

export const Chats = () => {
  const chatId = useParams().chatId;
  const messages = useSelector(selectMessages);

  if (chatId && !messages[chatId]) {
    return <Redirect to="/chats" />;
  }

  return (
    <>
      <ChatList />
      <MessageList messages={chatId ? messages[chatId] : []} />
      <Form />
    </>
  );
};
