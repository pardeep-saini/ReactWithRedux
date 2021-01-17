import { IS_LOGIN, USER_NAME, USER_NAME_TEST, USER_PASSWORD } from "../actions/action-type";

const initialState = {
  username: "chetu",
  password: "",
  loading: false,
  success: false,
  error: false
};

const userTesting = (state = initialState, action) => {
  console.log("actionactionaction",action)
   // Step 8
  switch (action.type) {
    case USER_NAME_TEST:
      return {
        ...state,
        username: action.username
      };
    default:
      return state;
  }

};

export default userTesting;
