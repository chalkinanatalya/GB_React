export const TOGGLE_PROFILE = "TOGGLE_PROFILE";
export const USER_NAME = `USER_NAME`;

export const toggleVisible = {
  type: TOGGLE_PROFILE,
};

export function userName(value) {
  return {
    type: USER_NAME,
    user: value,
  };
}
