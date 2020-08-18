import ClassApi from '../api/classApi';
import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';


export function addUserDetails(userdata){
  return dispatch=> dispatch({type:"USER_LOGGED_IN",userdata});
}
