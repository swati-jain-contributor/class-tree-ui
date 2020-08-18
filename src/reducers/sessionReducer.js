import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function sessionReducer(state = initialState.session, action) {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      {
        let obj = Object.assign({}, state);
        obj.user = action.userdata;
        return obj;
      } 
      default:
      return state;
  }
}
