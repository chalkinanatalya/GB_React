import { ADD_CHAT, DELETE_CHAT, SET_CHAT } from "./actions";

const initialChatList = [];

export const chatListReducer = (state = initialChatList, action) => {
  switch (action.type) {
    case ADD_CHAT: {
      return [...state, action.newChat];
    }
    case DELETE_CHAT: {
      return state.filter(({ id }) => id !== action.chatId);
    }
    case SET_CHAT: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
