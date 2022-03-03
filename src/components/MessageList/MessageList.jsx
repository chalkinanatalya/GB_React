import React from "react";

export const MessageList = ({ messages }) => (
  <ul>
    {messages.map((message) => (
      <li key={message.id}>
        {message.author}: {message.text}
      </li>
    ))}
  </ul>
);
