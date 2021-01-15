import { GET_USER_LIST } from "./action-type";
import axios from 'axios';
import { pageLoading, alertError, alertSuccess } from "./alert-actions";
import User from "../tools/user-service";



export const getUserList = data => {
    const type = GET_USER_LIST;
      return { type, data };
  };

export const fetchTreeData = () => {
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => dispatch(getUserList(res.data)))
        // .catch(err => dispatch(treeRequestFailed(err)))
    }
  }