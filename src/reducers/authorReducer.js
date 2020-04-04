import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.session, action) {
  switch (action.type) {
    case types.CREATE_APARTMENT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.session)
      ];;

    default:
      return state;
  }
}
