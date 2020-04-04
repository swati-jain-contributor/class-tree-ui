import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == '_SUCCESS';
}
function actionTypeEndsInFailure(type) {
  return type.substring(type.length - 8) == '_FAILURE';
}

export default function ajaxStatusReducer(state = initialState.ajaxCallsInProgress, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    console.log("Sent:"+action.type);
    return state + 1;
  } else if (action.type == types.AJAX_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type) || actionTypeEndsInFailure(action.type)) {
      console.log("Recieved:"+action.type);
    return state - 1;
  }
  else{
    console.log("No impact:"+action.type);
  }


  return state;
}
