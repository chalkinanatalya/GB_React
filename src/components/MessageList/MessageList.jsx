import React from "react";

export const MessageList = ({ messages }) => (
  <>
    <p>Think about the question you're conserned</p>
    <ul>
      {messages.map((message) => (
        <li key={message.id}>
          {message.author}: {message.text}
        </li>
      ))}
    </ul>
  </>
);
