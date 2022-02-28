import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

export const ChatList = ({ chats, chatId }) => (
  <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
    <nav aria-label="main mailbox folders">
      <List>
        {Object.keys(chats).map((id, i) => (
          <ListItem disablePadding key={i}>
            <Link to={`/chats/${id}`}>
              <ListItemButton>
                <ListItemText primary={chats[id].name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
        <Divider />
      </List>
    </nav>
  </Box>
);
