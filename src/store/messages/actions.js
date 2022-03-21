export const ADD_MESSAGE = "MESSAGE::ADD_MESSAGE";
export const CREATE_MESSAGE_CHAT = "MESSAGE::CREATE_MESSAGE_CHAT";
export const DELETE_MESSAGE_CHAT = "MESSAGE::DELETE_MESSAGE_CHAT";

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  text: message.text,
  author: message.author,
  chatId: message.chatId,
});

export const createMessageChat = (chatId) => ({
  type: CREATE_MESSAGE_CHAT,
  chatId,
});

export const deleteMessageChat = (chatId) => ({
  type: DELETE_MESSAGE_CHAT,
  chatId,
});

let timerId; 
export const addMessageWithThunk = (message, answer) => (dispatch) => {
  dispatch(addMessage(message));

  if(timerId) {clearTimeout(timerId)};
  timerId = setTimeout(() => dispatch(addMessage({
    chatId: message.chatId,
    text: answer.botAnswer,
    author: answer.botName,
  })), 1000);
}