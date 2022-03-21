export const ADD_CHAT = "CHATLIST::ADD_CHAT";
export const DELETE_CHAT = "CHATLIST::DELETE_CHAT";

export const addChat = (newChat, name) => ({
  type: ADD_CHAT,
  chat: name,
  newChat,
});

export const deleteChat = (chatId) => ({
  type: DELETE_CHAT,
  chatId,
});
