import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Profile } from "../src/pages/Profile";
import { Chats } from "../src/pages/Chats";
import { Home } from "../src/pages/Home";
import { NoChat } from "../src/pages/NoChat";
import { Provider } from 'react-redux';
import { store } from './store/index';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <header>
            <ul>
              <li>
                <Link to="/profile">profile</Link>
              </li>

              <li>
                <Link to="/chats">chats</Link>
              </li>

              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </header>

          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/chats">
              <Chats />
            </Route>

            <Route path="/nochat">
              <NoChat />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <Route>
              <h3>Page not found</h3>
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
};
