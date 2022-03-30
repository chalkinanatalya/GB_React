import { onValue } from "firebase/database";
import { chatsRef } from "../../services/firebase";

export const ADD_CHAT = "CHATLIST::ADD_CHAT";
export const DELETE_CHAT = "CHATLIST::DELETE_CHAT";
export const SET_CHAT = "CHATLIST::SET_CHAT";

export const addChat = (newChat, name) => ({
  type: ADD_CHAT,
  chat: name,
  newChat,
});

export const deleteChat = (chatId) => ({
  type: DELETE_CHAT,
  chatId,
});

export const setChat = (payload) => ({
  type: SET_CHAT,
  payload,
});

export const initChatFB = () => (dispatch) => {

  onValue(chatsRef, (chatSnap) => {
    const newChats = [];
    chatSnap.forEach((snapshot) => {
      newChats.push(snapshot.val());
    });
      dispatch(setChat(newChats));
  });
};
