import React from "react";

export const MessageList = ({ messages }) => {
  return (
    <ul style={{listStyleType: "none", paddingLeft: "0"}}>
      {messages.map((message) => (
        <li className="test" key={message.id}>
          {message.author}: {message.text}
        </li>
      ))}
    </ul>
  );
};
