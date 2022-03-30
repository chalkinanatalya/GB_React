import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { Profile } from "../../pages/Profile";
import { Articles } from "../../pages/Articles";
import { Chats } from "../../pages/Chats";
import { ChatList } from "../ChatList/ChatList";
import { Home } from "../../pages/Home";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { SignIn } from "../../pages/SignIn";
import { SignUp } from "../../pages/SignUp";
import { PrivateRoute } from "../PrivateRouter";
import { PublicRoute } from "../PublicRouter";
import { auth, messagesRef } from "../../services/firebase";
import { useDispatch } from "react-redux";
import { authProfile } from "../../store/profile/actions";
import { onValue } from "firebase/database";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const Main = () => {
  const [msgs, setMsgs] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(authProfile(true));
      } else {
        dispatch(authProfile(false));
      }
    });
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = onValue(messagesRef, (msgSnap) => {
      const newMsgs = {};
      msgSnap.forEach((snapshot) => {
        if (snapshot.key) {
          newMsgs[snapshot.key] = Object.values(
            snapshot.val().messageList || {}
          );
        }
      });
      setMsgs(newMsgs);
    });

    return unsubscribe;
  }, []);

  return (
    <Switch>
      <PublicRoute restricted={false} exact path="/" component={Home} />
      <PrivateRoute path="/profile" component={Profile} />
      <PublicRoute restricted={false} path="/articles" component={Articles} />
      <PublicRoute restricted={true} path="/signin" component={SignIn} />
      <PublicRoute restricted={false} path="/signup" component={SignUp} />

      <Route path="/chats">
        <Box sx={{ width: "100%", maxWidth: 450, bgcolor: "background.paper" }}>
          <Item>
            <PrivateRoute path="/chats">
              <Route exact path="/chats" component={ChatList} />
              <Route
                path="/chats/:chatId"
                render={() => <Chats msgs={msgs} />}
              />
            </PrivateRoute>
          </Item>
        </Box>
      </Route>
      <Route>
        <h3>Page not found</h3>
      </Route>
    </Switch>
  );
};
