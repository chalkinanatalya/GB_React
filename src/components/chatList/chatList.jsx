import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

import { createMessageChat, deleteMessageChat } from "../../store/messages/actions";
import { addChat, deleteChat } from "../../store/chatlist/actions";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemButton from '@mui/material/ListItemButton';

export const ChatList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const chatList = useSelector((state) => state.chatlist);

  const handleAddChat = (name) => {
    const id = nanoid();
    dispatch(addChat({id, name}));
    dispatch(createMessageChat(id));
    setValue("");
  };

  const handleDeleteChat = (chatId) => {
    dispatch(deleteChat(chatId));
    dispatch(deleteMessageChat(chatId));
  };

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => handleAddChat(value)}>add chat</button>
      <nav aria-label="main mailbox folders">
        <List>
        <Divider />
          {chatList.map((chat) => (
            <ListItem button component={Link} to={`/chats/${chat.id}/${chat.name}`} key={chat.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailOutlineIcon />
                </ListItemIcon>
                <ListItemText primary={chat.name} />
              </ListItemButton>
              <IconButton aria-label="delete" onClick={() => handleDeleteChat(chat.id)} size="small"><DeleteIcon fontSize="small"/></IconButton >
            </ListItem>
          ))}
        </List>
        <Divider />
      </nav>
    </>
  );
};
