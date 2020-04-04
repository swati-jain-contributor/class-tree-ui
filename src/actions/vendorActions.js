import VendorsApi from '../api/vendorsApi';
import * as types from './actionTypes';
import { beginAjaxCall,ajaxCallError } from './ajaxStatusActions';
import { resetErrorMessage } from './loginActions';

export function getAllVendorsSuccess(vendors) {
  return { type: types.GET_VENDORS_SUCCESS, vendors };
}
export function getAllVendorsFailure(data) {
  return { type: types.GET_VENDORS_FAILURE, data };
}

export function getAllVendors() {
  return dispatch => {
      dispatch(beginAjaxCall());
    return VendorsApi.getAllVendors().then(data => {
      if (data.status == "SUCCESS")
        dispatch(getAllVendorsSuccess(data.response));
      else
        dispatch(getAllVendorsFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function addVendorSuccess(vendor) {
  window.raiseAnalyticsEvent("ADD_VENDOR_REQUEST_SUCCESS");
  return { type: types.ADD_VENDOR_SUCCESS, vendor };
}
export function addVendorFailure(data) {
  window.raiseAnalyticsEvent("ADD_VENDOR_REQUEST_FAILURE");
  return { type: types.ADD_VENDOR_FAILURE, data };
}

export function addVendor(vendor) {
  window.raiseAnalyticsEvent("ADD_VENDOR_REQUEST_SENT");
  return dispatch => {
    dispatch(beginAjaxCall());
    return VendorsApi.addVendor(vendor).then(data => {
      if (data.status == "SUCCESS")
        dispatch(addVendorSuccess(data.response));
      else
        dispatch(addVendorFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function editVendorSuccess(vendor) {
  return { type: types.EDIT_VENDOR_SUCCESS, vendor };
}
export function editVendorFailure(data) {
  return { type: types.EDIT_VENDOR_FAILURE, data };
}

export function editVendor(vendor) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return VendorsApi.editVendor(vendor).then(data => {
      if (data.status == "SUCCESS")
        dispatch(editVendorSuccess(data.response));
      else
        dispatch(editVendorFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function delVendorSuccess(id) {
  return { type: types.DELETE_VENDOR_SUCCESS, id };
}
export function delVendorFailure(data) {
  return { type: types.DELETE_VENDOR_FAILURE, data };
}

export function deleteVendor(id) {
  return dispatch => {
      dispatch(beginAjaxCall());
    return VendorsApi.deleteVendor(id).then(data => {
      if (data.status == "SUCCESS")
        dispatch(delVendorSuccess(id));
      else
        dispatch(delVendorFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
export function likeVendorSuccess(id) {
  window.raiseAnalyticsEvent("RATE_VENDOR_REQUEST_SUCCESS");
  return { type: types.LIKE_VENDOR_SUCCESS, id };
}
export function likeVendorFailure(data) {
  window.raiseAnalyticsEvent("RATE_VENDOR_REQUEST_FAILURE");
  return { type: types.LIKE_VENDOR_FAILURE, data };
}

export function likeVendor(id) {
  return dispatch => {
    dispatch(beginAjaxCall());
    window.raiseAnalyticsEvent("RATE_VENDOR_REQUEST_SENT");
    return VendorsApi.likeVendor(id).then(data => {
      if (data.status == "SUCCESS")
        dispatch(likeVendorSuccess(id));
      else
        dispatch(likeVendorFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
export function dislikeVendorSuccess(id) {
  window.raiseAnalyticsEvent("RATE_VENDOR_REQUEST_SUCCESS");
  return { type: types.DISLIKE_VENDOR_SUCCESS, id };
}
export function dislikeVendorFailure(data) {
  window.raiseAnalyticsEvent("RATE_VENDOR_REQUEST_FAILURE");
  return { type: types.DISLIKE_VENDOR_FAILURE, data };
}

export function dislikeVendor(id) {
  return dispatch => {
      dispatch(beginAjaxCall());
      window.raiseAnalyticsEvent("RATE_VENDOR_REQUEST_SENT");
    return VendorsApi.dislikeVendor(id).then(data => {
      if (data.status == "SUCCESS")
        dispatch(dislikeVendorSuccess(id));
      else
        dispatch(dislikeVendorFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}