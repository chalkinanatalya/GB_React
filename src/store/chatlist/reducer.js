import { ADD_CHAT, DELETE_CHAT } from "./actions";

const initialChatList = [];

export const chatListReducer = (state = initialChatList, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      return [...state, action.newChat];
    }
    case DELETE_CHAT: {
      return state.filter(({ id }) => id !== action.chatId);
    }
    default: {
      return state;
    }
  }
};
