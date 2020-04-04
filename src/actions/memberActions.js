import MembersApi from '../api/membersApi';
import * as types from './actionTypes';
import { beginAjaxCall,ajaxCallError } from './ajaxStatusActions';
import { resetErrorMessage } from './loginActions';

export function getAllMembersSuccess(members) {
  return { type: types.GET_MEMBERS_SUCCESS, members };
}
export function getAllMembersFailure(data) {
  return { type: types.GET_MEMBERS_FAILURE, data };
}

export function getAllMembers() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return MembersApi.getAllMembers().then(data => {
      if (data.status == "SUCCESS")
        dispatch(getAllMembersSuccess(data.response));
      else
        dispatch(getAllMembersFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function getAllRequestsSuccess(requests) {
  return { type: types.GET_REQUESTS_SUCCESS, requests };
}
export function getAllRequestsFailure(data) {
  return { type: types.GET_REQUESTS_FAILURE, data };
}

export function getAllRequests() {
  return dispatch => {
     dispatch(beginAjaxCall());
    return MembersApi.getAllRequests().then(data => {
      if (data.status == "SUCCESS")
        dispatch(getAllRequestsSuccess(data.response));
      else
        dispatch(getAllRequestsFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
export function updateRequestSuccess(request) {
  return { type: types.UPDATE_REQUEST_SUCCESS, request };
}
export function updateRequestFailure(data) {
  return { type: types.UPDATE_REQUEST_FAILURE, data };
}

export function updateRequest(request) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return MembersApi.updateRequest(request).then(data => {
      if (data.status == "SUCCESS")
        dispatch(updateRequestSuccess(request));
      else
        dispatch(updateRequestFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}


export function addMemberSuccess(member) {
  return { type: types.ADD_MEMBER_SUCCESS, member };
}
export function addMemberFailure(data) {
  return { type: types.ADD_MEMBER_FAILURE, data };
}

export function addMember(member) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return MembersApi.addMember(member).then(data => {
      if (data.status == "SUCCESS")
        dispatch(addMemberSuccess(data.response));
      else
        dispatch(addMemberFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function editMemberSuccess(member) {
  return { type: types.EDIT_MEMBER_SUCCESS, member };
}
export function editMemberFailure(data) {
  return { type: types.EDIT_MEMBER_FAILURE, data };
}

export function editMember(member) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return MembersApi.editMember(member).then(data => {
      if (data.status == "SUCCESS")
        dispatch(editMemberSuccess(data.response));
      else
        dispatch(editMemberFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}


export function delMemberSuccess(id) {
  return { type: types.DELETE_MEMBER_SUCCESS, id };
}
export function delMemberFailure(data) {
  return { type: types.DELETE_MEMBER_FAILURE, data };
}

export function deleteMember(id) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return MembersApi.deleteMember(id).then(data => {
      console.log(data);
      if (data.status == "SUCCESS")
        dispatch(delMemberSuccess(id));
      else
        dispatch(delMemberFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}