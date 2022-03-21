import { chatZero } from "../../chats/chat0";
import { chatOne } from "../../chats/chat1";

const initialChats = [
    {
      name: "chat0",
      messages: chatZero,
      author:  "Bot #0",
    },
    {
      name: "chat1",
      messages: chatOne,
      author: "Bot #1",
    }
];

export function Answer (chatName, text) {
    let botAnswer;
    let botName;
    for (const chat of initialChats) {
        if (chatName === chat.name) {
            botAnswer = chat.messages.find(
            (answer) =>
                answer.question === text).text;
                botName = chat.author;
            break;
        } else {
            botAnswer = "I'm BOT";
            botName = "BOT";
        };
    }
    return {botAnswer, botName}
}