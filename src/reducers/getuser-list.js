import { GET_USER_LIST } from "../actions/action-type";

const initialState = {
  data: "",
  loading: false,
  success: false,
  error: false
};

const getUserList = (state = initialState, action) => {
  console.log("actionactionaction_tes",action)
  
   // Step 8
  switch (action.type) {
    case GET_USER_LIST:
        
      return {
        ...state,
        data: action.data
      };
    default:
      return state;
  }

};

export default getUserList;
