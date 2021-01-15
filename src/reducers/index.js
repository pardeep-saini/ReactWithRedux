import { combineReducers } from "redux";
import userReducer from "./user-reducer";
import alertReducer from "./alert-reducer";
import dashboardReducer from "./dashboard-reducer";
import userTesting from './user-testing';  // Step 7
import getUserList from './getuser-list';

export default combineReducers({
  login: userReducer,
  alert: alertReducer,
  dashboard: dashboardReducer,
  Pradeep: userTesting,
  getUserList: getUserList
});
