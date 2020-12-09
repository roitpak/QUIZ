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
  SET_LOGGED_IN_TRUE,
  SET_NEW_USERS,
} from "./types";
import axios from "axios";
import * as RootNavigation from "../../navigation/RootNavigation";

export const changeUsername = (username) => {
  return {
    type: USER_NAME_CHANGED,
    payload: username,
  };
};
export const changePassword = (password) => {
  return {
    type: USER_PASSWORD_CHANGED,
    payload: password,
  };
};

export const changeFullNameRegister = (value) => {
  return {
    type: FULL_NAME_REGISTER_CHANGED,
    payload: value,
  };
};
export const changeNumberRegister = (value) => {
  return {
    type: MOBILE_NUMBER_REGISTER_CHANGED,
    payload: value,
  };
};
export const changePasswordRegister = (value) => {
  return {
    type: PASSWORD_REGISTER_CHANGED,
    payload: value,
  };
};
export const changeRepeatPasswordRegister = (value) => {
  return {
    type: REPEAT_PASSWORD_CHANGED,
    payload: value,
  };
};

export const setLoadingFalse = () => {
  return {
    type: SET_LOADING_FALSE,
  };
};

export const loginUser = (mobileNUmber, password, users) => {
  return (dispatch) => {
    if (mobileNUmber == "" || password == "") {
      showAlertPopUpOnOtherAction(
        "Login",
        "Incomplete Credentials...",
        dispatch
      );
      return;
    }
    let userFound = false;
    dispatch({
      type: SET_LOADING_MESSAGE,
      payload: "Logging in...",
    });
    setTimeout(() => {
      users.map((item) => {
        if (item.mobileNumber == mobileNUmber && item.password == password) {
          userFound = true;
        }
      });
      if (userFound) {
        dispatch({
          type: SET_LOGGED_IN_TRUE,
        });
      } else {
        showAlertPopUpOnOtherAction("User", "User not found...", dispatch);
      }
    }, 1000);
  };
};
export const registerUser = (
  fullName,
  mobileNumber,
  password,
  repeatPassword,
  users
) => {
  return (dispatch) => {
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
      payload: "Registering...",
    });
    setTimeout(() => {
      dispatch({
        type: SET_LOADING_FALSE,
      });
      let user = {
        fullName: fullName,
        mobileNumber: mobileNumber,
        password: password,
      };
      let list = users;

      var isAlready = false;
      list.map((item) => {
        if (item.fullName == fullName) {
          isAlready = true;
        }
      });

      if (isAlready) {
        showAlertPopUpOnOtherAction("User", "User already available", dispatch);
      } else {
        RootNavigation.navigate("LoginScreen");

        list.push(user);

        dispatch({
          type: SET_NEW_USERS,
          payload: list,
        });
      }
    }, 1000);
  };
};

export const showAlertPopUp = (title, message) => {
  return (dispatch) => {
    let alertMessage = { title: title, message: message };
    dispatch({
      type: SHOW_ALERT_POP_UP,
      payload: alertMessage,
    });
  };
};
export const showAlertPopUpOnOtherAction = (title, message, dispatch) => {
  let alertMessage = { title: title, message: message };
  console.log(alertMessage);
  dispatch({
    type: SHOW_ALERT_POP_UP,
    payload: alertMessage,
  });
};
export const hideAlertPopUp = () => {
  return {
    type: HIDE_ALERT_POP_UP,
  };
};
