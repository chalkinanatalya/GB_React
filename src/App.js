import React, { Fragment } from "react";
import "./App.module.css";
import { Message } from "./components/Message/Message.jsx";

function App() {
  return (
    <Fragment>
      <div className="background">
        <Message />
      </div>
    </Fragment>
  );
}

export default App;
