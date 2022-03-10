import { createStore, compose, combineReducers } from 'redux';
import { profileReducer } from './profile/reducer';
import { chatListReducer } from './chatlist/reducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    profile: profileReducer,
    chatlist: chatListReducer,
  }),
  composeEnhancers()
);
