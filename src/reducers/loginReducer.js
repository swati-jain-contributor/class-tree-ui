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
    
      var obj = Object.assign({}, state);
      if(action.data)
        obj.errorMsg = action.data;
      return obj;

    default:
      return state;
  }
}
