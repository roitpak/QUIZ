import { USER_NAME_CHANGED } from "./types";

export const changeUsername = username => {
  return {
    type: USER_NAME_CHANGED,
    payload: username
  };
};
