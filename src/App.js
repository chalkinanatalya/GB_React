import React, { useState, Suspense } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { nanoid } from "nanoid";

import { Profile } from "../src/pages/Profile";
import { Chats } from "../src/pages/Chats";
import { ChatList } from "./components/ChatList/ChatList";
import { Home } from "../src/pages/Home";
import { addChat, deleteChat } from "./store/chatlist/actions";

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CottageIcon from '@mui/icons-material/Cottage';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const App = () => {
  const [value, setValue] = React.useState(0);
  const [messages, setMessages] = useState({});
  const dispatch = useDispatch();


  const handleAddChat = (name) => {
    const id = nanoid();
    dispatch(addChat({ id, name }));
    setMessages((prevMessages) => ({
      ...prevMessages,
      [id]: [],
    }));
  };

  const handleDeleteChat = (chatId) => {
    dispatch(deleteChat(chatId));
    setMessages((prevMessages) => {
      const messages = { ...prevMessages };
      delete messages[chatId];
      return messages;
    });
  };
  
  return (
      <Suspense fallback={<div>Загрузка...</div>}>
        <BrowserRouter>
          <header>
            <Box sx={{ width: 500 }}>
              <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              >
                <BottomNavigationAction label="Home" icon={<CottageIcon />} component={Link} to="/"/>
                <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} component={Link} to="/profile"/>
                <BottomNavigationAction label="Chats" icon={<ChatIcon />} component={Link} to="/chats"/>
              </BottomNavigation>
            </Box>
          </header>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />

            <Route path="/chats">
              <Box sx={{ width: "100%", maxWidth: 450, bgcolor: "background.paper" }}>
                  <Item>
                    <Route exact path="/chats">
                      <ChatList
                        addChat={handleAddChat}
                        deleteChat={handleDeleteChat}
                      />
                    </Route>
                    <Route path="/chats/:chatId/:chatName">
                      <Chats
                        messages={messages}
                        setMessages={setMessages}
                        addChat={handleAddChat}
                        deleteChat={handleDeleteChat}
                      />
                    </Route>
                  </Item>
              </Box>
            </Route>

            <Route>
              <h3>Page not found</h3>
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
  );
};
