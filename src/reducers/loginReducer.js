import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.session, action) {
  switch (action.type) {
    case types.AUTHENTICATION_SUCCESS:
      return action.session;
    case types.AUTHENTICATION_FAILURE:
      var obj = Object.assign({}, state);
      obj.authenticationStatus = false;
      if(action.data)
        obj.errorMsg = action.data;
      return obj;
    case types.LOGIN_FAILURE:
      var obj = Object.assign({}, state);
      obj.authenticationStatus = false;
      if(action.data)
      obj.errorMsg = action.data;
      return obj;
    case types.RESET_ERROR_MESSAGE:
      var obj = Object.assign({}, state);
      obj.errorMsg = action.data;
      return obj;
    case types.LOGIN_SUCCESS:
      var obj = Object.assign({}, state);
      obj.authenticationStatus = action.data.authenticationStatus;
      obj.aptId = action.data.aptId;
      obj.userId = action.data.userId;
      obj.memberid = action.data.memberid;
      obj.name = action.data.name;
      obj.role = action.data.role;
      obj.status = action.data.status;
      obj.isVerified = true;
      return obj;
    case types.CREATE_APARTMENT_SUCCESS:
      var obj = Object.assign({}, state);
      obj.apartmentRegistrationSuccess = true;
      if (action.apartment.address)
        obj.aptId = action.apartment._id;
      else
        obj.requestId = action.apartment._id;
      return obj;
    case types.CREATE_APARTMENT_FAILURE:
      var obj = Object.assign({}, state);
      if(action.data)
        obj.errorMsg = action.data;      
      return obj;
    case types.OTP_SUCCESS:
      var obj = Object.assign({}, state);
      obj.loginOTPSuccess = true;
      return obj;
    case types.OTP_FAILURE:
      var obj = Object.assign({}, state);
      obj.loginOTPSuccess = false;
      if (action.data)
        obj.errorMsg = action.data;
      return obj;
    case types.CREATE_APARTMENT_FAILURE:
    case types.GET_ADDRESS_FAILURE:
    case types.GET_MEMBERS_FAILURE:
    case types.ADD_MEMBER_FAILURE:
    case types.EDIT_MEMBER_FAILURE:
    case types.DELETE_MEMBER_FAILURE:
    case types.GET_REQUESTS_FAILURE:
    case types.UPDATE_REQUEST_FAILURE:
    case types.GET_VENDORS_FAILURE:
    case types.ADD_VENDOR_FAILURE:
    case types.EDIT_VENDOR_FAILURE:
    case types.DELETE_VENDOR_FAILURE:
    case types.LIKE_VENDOR_FAILURE:
    case types.DISLIKE_VENDOR_FAILURE:
    case types.CREATE_MAINTAINENCE_FAILURE:
    case types.PAY_MAINTAINENCE_FAILURE:
    case types.BLOCK_MAINTAINENCE_FAILURE:
    case types.ADD_EXPENSE_FAILURE:
    case types.GET_MEMBER_STMT_FAILURE:
    case types.GET_SOCIETY_FUNDS_FAILURE:
    case types.GET_MAINTAINENCE_DETAILS_FAILURE:
    case types.GET_ALL_MAINTAINENCE_FAILURE:
    case types.GET_PENDING_MAINTAINENCE_FAILURE:
    case types.ADD_DISCUSSION_FAILURE:
    case types.EDIT_NOTICE_FAILURE:
    case types.ADD_MESSAGE_FAILURE:
    case types.CLOSE_DISCUSSION_FAILURE:
    case types.GET_NOTICES_FAILURE:
    case types.GET_COMPLAINTS_FAILURE:
    case types.GET_DISCUSSIONS_FAILURE:
      var obj = Object.assign({}, state);
      if(action.data)
        obj.errorMsg = action.data;
      return obj;

    default:
      return state;
  }
}
