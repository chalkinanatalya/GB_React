import { TOGGLE_PROFILE, USER_NAME } from "./actions";
import { Reducer, Action } from "redux";

const initialState = {
  visible: false,
  name: "User",
};

export const profileRefucer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PROFILE: {
      return {
        ...state,
        visible: !state.visible,
      };
    }
    case USER_NAME: {
      return {
        ...state,
        name: action.user,
      };
    }
    default: {
      return state;
    }
  }
};
