import {
  USER_NAME_CHANGED,
  USER_PASSWORD_CHANGED,
  FULL_NAME_REGISTER_CHANGED,
  MOBILE_NUMBER_REGISTER_CHANGED,
  PASSWORD_REGISTER_CHANGED,
  REPEAT_PASSWORD_CHANGED,
  SET_LOADING_FALSE,
  SHOW_ALERT_POP_UP,
  HIDE_ALERT_POP_UP,
  SET_LOADING_MESSAGE,
  SET_LOGGED_IN_TRUE
} from "./types";
import axios from "axios";
import * as RootNavigation from "../../navigation/RootNavigation";

export const changeUsername = username => {
  return {
    type: USER_NAME_CHANGED,
    payload: username
  };
};
export const changePassword = password => {
  return {
    type: USER_PASSWORD_CHANGED,
    payload: password
  };
};

export const changeFullNameRegister = value => {
  return {
    type: FULL_NAME_REGISTER_CHANGED,
    payload: value
  };
};
export const changeNumberRegister = value => {
  return {
    type: MOBILE_NUMBER_REGISTER_CHANGED,
    payload: value
  };
};
export const changePasswordRegister = value => {
  return {
    type: PASSWORD_REGISTER_CHANGED,
    payload: value
  };
};
export const changeRepeatPasswordRegister = value => {
  return {
    type: REPEAT_PASSWORD_CHANGED,
    payload: value
  };
};

export const setLoadingFalse = () => {
  return {
    type: SET_LOADING_FALSE
  };
};

export const loginUser = (mobileNUmber, password) => {
  return dispatch => {
    if (mobileNUmber == "" || password == "") {
      showAlertPopUpOnOtherAction(
        "Login",
        "Incomplete Credentials...",
        dispatch
      );
      return;
    }
    dispatch({
      type: SET_LOADING_MESSAGE,
      payload: "Logging in..."
    });
    setTimeout(() => {
      dispatch({
        type: SET_LOGGED_IN_TRUE
      });
    }, 1000);
  };
};
export const registerUser = (
  fullName,
  mobileNumber,
  password,
  repeatPassword
) => {
  return dispatch => {
    if (
      fullName == "" ||
      mobileNumber == "" ||
      password == "" ||
      repeatPassword == ""
    ) {
      showAlertPopUpOnOtherAction(
        "Login",
        "Incomplete Credentials...",
        dispatch
      );
      return;
    }
    if (password != repeatPassword) {
      showAlertPopUpOnOtherAction("Password", "Password not same...", dispatch);
      return;
    }
    dispatch({
      type: SET_LOADING_MESSAGE,
      payload: "Registering..."
    });
    setTimeout(() => {
      RootNavigation.navigate("OtpVerificationScreen");
      dispatch({
        type: SET_LOADING_FALSE
      });
    }, 1000);
  };
};

export const verifyUser = otp => {
  return dispatch => {
    if (otp == "") return;
    dispatch({
      type: SET_LOADING_MESSAGE,
      payload: "verifying..."
    });
    setTimeout(() => {
      RootNavigation.navigate("LoginScreen");
      dispatch({
        type: SET_LOADING_FALSE
      });
    }, 1000);
  };
};
export const showAlertPopUp = (title, message) => {
  return dispatch => {
    let alertMessage = { title: title, message: message };
    dispatch({
      type: SHOW_ALERT_POP_UP,
      payload: alertMessage
    });
  };
};
export const showAlertPopUpOnOtherAction = (title, message, dispatch) => {
  let alertMessage = { title: title, message: message };
  dispatch({
    type: SHOW_ALERT_POP_UP,
    payload: alertMessage
  });
};
export const hideAlertPopUp = () => {
  return {
    type: HIDE_ALERT_POP_UP
  };
};
