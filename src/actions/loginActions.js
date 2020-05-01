import LoginApi from '../api/loginApi';
import * as types from './actionTypes';
import { beginAjaxCall,ajaxCallError } from './ajaxStatusActions';

export function authenticationSuccess(session) {
  window.raiseAnalyticsEvent("AUTHENTICATION_SUCCESS");
  return { type: types.AUTHENTICATION_SUCCESS, session };
}
export function authenticationFailure(session) {
  window.raiseAnalyticsEvent("AUTHENTICATION_FAILED");
  return { type: types.AUTHENTICATION_FAILURE, session };
}

export function loginSuccess(data) {
  window.raiseAnalyticsEvent("LOGIN_REQUEST_SUCCESS");
  return { type: types.LOGIN_SUCCESS, data };
}
export function loginFailure(data) {
  window.raiseAnalyticsEvent("LOGIN_REQUEST_FAILURE");
  return { type: types.LOGIN_FAILURE, data };
}
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function checkAuthenticationStatus() {

  return dispatch => {
    dispatch(beginAjaxCall());
    if (localStorage.token) {
      window.raiseAnalyticsEvent("CHECK_AUTHENTICATION_REQUEST_SENT");
      return LoginApi.getUserData().then(data => {
        if (data.status == "SUCCESS" && data.response.authenticationStatus) {
          dispatch(authenticationSuccess(data.response));
          dispatch(getAllMembers());
          if(data.response.role=="President")
            dispatch(getAllRequests());
        }
        else {
          // dispatch(authenticationFailure(data.errorDesc));
          return LoginApi.createSession().then(session => {
            localStorage.token =  session.response.authCode
            dispatch(authenticationFailure(session));
          });
        }

      }).catch(error => {
        dispatch(resetErrorMessage("Please check your internet connection"));
        dispatch(ajaxCallError(error));
        throw (error);
      });
    }
    else {
      window.raiseAnalyticsEvent("NEW_SESSION_REQUEST_SENT");
      return LoginApi.createSession().then(session => {
        localStorage.token = session.response.authCode
        dispatch(authenticationFailure(session));
      }).catch(error=>{
        dispatch(resetErrorMessage("Please check your internet connection"));
        dispatch(ajaxCallError(error));
        throw(error);
      });
    }
  };
}

export function login(loginData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    window.raiseAnalyticsEvent("LOGIN_REQUEST_SENT");
    return LoginApi.login(loginData).then(data => {
      if (data.status == 'SUCCESS' && data.response.status == "active") {
        dispatch(loginSuccess(data.response));
        if(data.response.authenticationStatus)
          dispatch(getAllMembers());
        if(data.response.role=="President")
        dispatch(getAllRequests());
      }
      else {
        dispatch(loginFailure(data.errorDesc));
      }
    }).catch(error=>{
        dispatch(resetErrorMessage("Please check your internet connection"));
        dispatch(ajaxCallError(error));
        throw(error);
      });
  };
}
export function sendOTP(reqData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    window.raiseAnalyticsEvent("OTP_REQUEST_SENT");
    return LoginApi.sendOTP(reqData).then(data => {
      if (data.status == 'SUCCESS') {
        dispatch(otpSuccess(data.response));        
      }
      else {
        dispatch(otpFailure(data.errorDesc));
      }
    }).catch(error=>{
        dispatch(resetErrorMessage("Please check your internet connection"));
        dispatch(ajaxCallError(error));
        throw(error);
      });
  };
}
export function otpSuccess(data) {
  window.raiseAnalyticsEvent("OTP_REQUEST_SUCCESS");
  return { type: types.OTP_SUCCESS, data };
}
export function otpFailure(data) {
  window.raiseAnalyticsEvent("OTP_REQUEST_FAILURE");
  return { type: types.OTP_FAILURE, data };
}

export function getApartmentAddress(reqData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return LoginApi.getApartmentAddress(reqData).then(data => {
      if (data.status == 'SUCCESS') {
        dispatch(getAddressSuccess(data.response));        
      }
      else {
        dispatch(getAddressFailure(data.errorDesc));
      }
    }).catch(error=>{
        dispatch(resetErrorMessage("Please check your internet connection"));
        dispatch(ajaxCallError(error));
        throw(error);
      });
  };
}
export function getAddressSuccess(data) {
  return { type: types.GET_ADDRESS_SUCCESS, data };
}
export function getAddressFailure(data) {
  return { type: types.GET_ADDRESS_FAILURE, data };
}
export function resetErrorMessage(msg){
  return {type:types.RESET_ERROR_MESSAGE,data:msg};
}
