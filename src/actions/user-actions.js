import { IS_LOGIN, USER_NAME, USER_PASSWORD,USER_NAME_TEST } from "./action-type";
import { pageLoading, alertError, alertSuccess } from "./alert-actions";
import User from "../tools/user-service";

export const userNameChange = username => {
  const type = USER_NAME;
  return { type, username };
};


// Step 1  Step 6
export const userTesting = username => {
  const type = USER_NAME_TEST;
  return { type, username }
}


// "Mutable" means "changeable". If something is "immutable", it can never be changed.
export const userPasswordChange = password => {
  const type = USER_PASSWORD;
  return { type, password };
};
export const userLogin = (token, username) => {
  const type = IS_LOGIN;
  User.setToken(token);
  User.setUserInfo(username);
  return { type, token };
};

export const userClear = () => {
  const type = IS_LOGIN;
  User.clearData();
  return { type, token: null };
};

export const userLoginSubmit = (username, password) => {
  return dispatch => {
    dispatch(pageLoading());
    if (User.loginAttempt(username, password)) {
      dispatch(userLogin(Math.random(), username));
      return dispatch(
        alertSuccess("Login Success")
      );
    }
    return dispatch(alertError("Error"));
  };
};

export const userLogout = () => {
  return dispatch => {
    /*dispatch(userPassword("1"));*/
    dispatch(alertSuccess("Logout Success"));
    dispatch(userClear());
  };
};
