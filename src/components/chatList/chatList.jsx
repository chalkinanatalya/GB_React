import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemButton from '@mui/material/ListItemButton';

export const ChatList = ({ addChat, deleteChat }) => {
  const [value, setValue] = useState("");
  const chatList = useSelector((state) => state.chatlist);
  const handleClick = () => {
    addChat(value);
    setValue("");
  };
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleClick}>add chat</button>
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
              <IconButton aria-label="delete" onClick={() => deleteChat(chat.id)} size="small"><DeleteIcon fontSize="small"/></IconButton >
            </ListItem>
          ))}
        </List>
        <Divider />
      </nav>
    </>
  );
};
