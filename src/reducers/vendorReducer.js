import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function vendorReducer(state = initialState.vendors, action) {
  console.log('reducer'+action.type);
  switch (action.type) {
    case types.GET_VENDORS_SUCCESS:      
      return action.vendors;      
    case types.GET_VENDORS_FAILURE:
      return state;
    case types.ADD_VENDOR_SUCCESS:      
      return [
        ...state,
        action.vendor
      ];
    case types.ADD_VENDOR_FAILURE:
      return state;
    case types.EDIT_VENDOR_SUCCESS:
        return [
          ...state.filter(vendor => vendor._id !== action.vendor._id),
          action.vendor
        ];
      
    case types.EDIT_VENDOR_FAILURE:
      return state;
    case types.DELETE_VENDOR_SUCCESS:
      return [
        ...state.filter(vendor => vendor._id !== action.id)
      ];
    case types.DELETE_VENDOR_FAILURE:
      return state;
    case types.LIKE_VENDOR_SUCCESS:
      return state
    case types.LIKE_VENDOR_FAILURE:
      return state;
    case types.DISLIKE_VENDOR_SUCCESS:
      return state;
    case types.DISLIKE_VENDOR_FAILURE:
      return state;
    default:
      return state;
  }
}
