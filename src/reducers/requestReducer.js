import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function requestReducer(state = initialState.requests, action) {
  console.log('reducer'+action.type);
  switch (action.type) {
    case types.GET_REQUESTS_SUCCESS:      
      return action.requests;      
    case types.GET_REQUESTS_FAILURE:
      return state;
    case types.UPDATE_REQUEST_SUCCESS:
      var requests= state.filter(req=> req._id != action.request.requestId);
      return requests;
    case types.UPDATE_REQUEST_FAILURE:
      return state;    
    default:
      return state;
  }
}
