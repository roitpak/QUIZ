import {
  USER_NAME_CHANGED,
  USER_PASSWORD_CHANGED,
  REPEAT_PASSWORD_CHANGED,
  PASSWORD_REGISTER_CHANGED,
  MOBILE_NUMBER_REGISTER_CHANGED,
  FULL_NAME_REGISTER_CHANGED,
  SET_LOADING_MESSAGE,
  SET_LOADING_FALSE,
  SHOW_ALERT_POP_UP,
  HIDE_ALERT_POP_UP,
  SET_LOGGED_IN_TRUE,
  LOG_USER_OUT
} from "../actions/types";

const INITIAL_STATE = {
  username: "",
  password: "",

  fullNameRegister: "",
  mobileNumberRegister: "",
  passwordRegister: "",
  repeatPasswordRegister: "",

  loading: false,
  loadingMessage: "",

  showAlert: false,
  alertMessage: "",

  loggedIn: false
  // I am here guys
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_NAME_CHANGED:
      return {
        ...state,
        username: action.payload
      };
    case USER_PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      };
    case FULL_NAME_REGISTER_CHANGED:
      return {
        ...state,
        fullNameRegister: action.payload
      };
    case MOBILE_NUMBER_REGISTER_CHANGED:
      return {
        ...state,
        mobileNumberRegister: action.payload
      };
    case PASSWORD_REGISTER_CHANGED:
      return {
        ...state,
        passwordRegister: action.payload
      };
    case REPEAT_PASSWORD_CHANGED:
      return {
        ...state,
        repeatPasswordRegister: action.payload
      };
    case SET_LOADING_MESSAGE:
      return {
        ...state,
        loading: true,
        loadingMessage: action.payload
      };
    case SET_LOADING_FALSE:
      return {
        ...state,
        loadingMessage: "",
        loading: false
      };
    case SHOW_ALERT_POP_UP:
      return {
        ...state,
        showAlert: true,
        alertMessage: action.payload
      };
    case HIDE_ALERT_POP_UP:
      return {
        ...state,
        showAlert: false,
        alertMessage: { title: "", message: "" }
      };
    case SET_LOGGED_IN_TRUE:
      return {
        ...state,
        loggedIn: true,
        loading: false,
        loadingMessage: ""
      };
    case LOG_USER_OUT:
      return {
        ...state,
        loggedIn: false,
        loading: false,
        loadingMessage: ""
      };
    default:
      return state;
  }
};
