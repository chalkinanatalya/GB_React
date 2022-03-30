import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { initChatFB } from "../../store/chatlist/actions";
import {
  chatsRef,
  getChatListById,
  getMessagesRefId,
} from "../../services/firebase";
import { set, remove } from "firebase/database";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemButton from "@mui/material/ListItemButton";

export const ChatList = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  // const [chatList, setChatList] = useState([]);
  const chatList = useSelector((state) => state.chatlist);

  useEffect(() => {
    dispatch(initChatFB());
  }, []);

  const handleAddChat = () => {
    const id = nanoid();
    set(getChatListById(id), {
      id,
      name,
    });
    set(getMessagesRefId(id), {
      empty: true,
    });
    // dispatch(addChat({ id, name }));
    // dispatch(createMessageChat(id));
    setName("");
  };

  const handleDeleteChat = (chatId) => {
    remove(getChatListById(chatId));
    // dispatch(deleteChat(chatId));
    // dispatch(deleteMessageChat(chatId));
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddChat}>add chat</button>
      <nav aria-label="main mailbox folders">
        <List>
          <Divider />
          {chatList.map((chat) => (
            <ListItem
              button
              component={Link}
              to={`/chats/${chat.id}/${chat.name}`}
              key={chat.id}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  <MailOutlineIcon />
                </ListItemIcon>
                <ListItemText primary={chat.name} />
              </ListItemButton>
              <IconButton
                aria-label="delete"
                onClick={() => handleDeleteChat(chat.id)}
                size="small"
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </nav>
    </>
  );
};
