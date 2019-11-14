import { USER_NAME_CHANGED } from "../actions/types";

const INITIAL_STATE = {
  username: "abc@gmail.com"
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case USER_NAME_CHANGED:
      return {
      ...state,
      username: action.payload
    };
    default:
      return state;
  }
};