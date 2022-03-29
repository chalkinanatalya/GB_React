import { TOGGLE_PROFILE, USER_NAME, AUTH_PROFILE } from "./actions";

const initialState = {
  visible: false,
  name: "User",
  isAuth: false,
};

export const profileReducer = (state = initialState, action) => {
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
    case AUTH_PROFILE: {
      return {
        ...state,
        isAuth: action.isAuth,
      };
    }
    default: {
      return state;
    }
  }
};
