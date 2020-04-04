import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function memberReducer(state = initialState.members, action) {
  console.log('reducer'+action.type);
  switch (action.type) {
    case types.GET_MEMBERS_SUCCESS:      
      return action.members;      
    case types.GET_MEMBERS_FAILURE:
      return state;
    case types.ADD_MEMBER_SUCCESS:      
      return [
        ...state,
        action.member
      ];
    case types.ADD_MEMBER_FAILURE:
      return state;
    case types.EDIT_MEMBER_SUCCESS:
      return [
        ...state.filter(member => member._id !== action.member._id),
        action.member
      ];
    case types.EDIT_MEMBER_FAILURE:
      return state;
    case types.DELETE_MEMBER_SUCCESS:
      return [
        ...state.filter(member => member._id !== action.id)
      ];
    case types.DELETE_MEMBER_FAILURE:
      return state;
    default:
      return state;
  }
}
