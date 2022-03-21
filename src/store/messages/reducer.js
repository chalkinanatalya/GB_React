import { nanoid } from "nanoid";
import { ADD_MESSAGE, CREATE_MESSAGE_CHAT } from "./actions";

const initialChatList = {};

export const messageReducer = (state = initialChatList, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatId]: [
          ...state[action.chatId],
          {
            id: nanoid(),
            text: action.text,
            author: action.author,
          },
        ],
      };
    }
    case CREATE_MESSAGE_CHAT: {
      return {
        ...state,
        [action.chatId]: [],
      }
    }
    default: {
      return state;
    }
  }
};
