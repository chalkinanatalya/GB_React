export const TOGGLE_PROFILE = "PROFILE::TOGGLE_PROFILE";
export const USER_NAME = `PROFILE::USER_NAME`;
export const AUTH_PROFILE = "PROFILE::IS_AUTH";

export const toggleVisible = {
  type: TOGGLE_PROFILE,
};

export function userName(value) {
  return {
    type: USER_NAME,
    user: value,
  };
}

export const authProfile = (isAuth) => ({
  type: AUTH_PROFILE,
  isAuth,
});
