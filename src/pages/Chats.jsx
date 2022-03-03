import { React } from "react";
import style from "../App.module.css";
import { Message } from "../components/Message/Message";
import { ChatList } from "../components/ChatList/ChatList";
import { chatZero } from "../chats/chat0";
import { chatOne } from "../chats/chat1";
import { chatTwo } from "../chats/chat2";
import { chatThree } from "../chats/chat3";
import { Chat } from "../components/Chat/Chat";
import { Switch, Route, useRouteMatch } from "react-router-dom";

export const initialChats = {
  id0: {
    name: "Chat0",
    messages: chatZero,
  },
  id1: {
    name: "Chat1",
    messages: chatOne,
  },
  id2: {
    name: "Chat2",
    messages: chatTwo,
  },
  id3: {
    name: "Chat3",
    messages: chatThree,
  },
};

export const Chats = () => {
  const { path } = useRouteMatch();
  return (
    <>
      <div className={style.container}>
        <Message />
        <div className={style.allChats}>
          <ChatList chats={initialChats} />
          <Switch>
            <Route exact path={path}>
              <h3>Please select a chat.</h3>
            </Route>
            <Route path={`${path}/:chatId`}>
              <Chat chats={initialChats} />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};
