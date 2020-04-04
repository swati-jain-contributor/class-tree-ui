import CollaborateApi from '../api/collaborateApi';
import * as types from './actionTypes';
import { beginAjaxCall,ajaxCallError } from './ajaxStatusActions';
import { resetErrorMessage } from './loginActions';

export function addDiscussionSuccess(collData) {
  return { type: types.ADD_DISCUSSION_SUCCESS, collData };
}
export function addDiscussionFailure(collData) {
  return { type: types.ADD_DISCUSSION_FAILURE,data: data };
}
export function addDiscussion(collData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return CollaborateApi.addDiscussion(collData).then(data => {
      if (data.status == "SUCCESS")
        dispatch(addDiscussionSuccess(data.response));
      else
        dispatch(addDiscussionFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function editNoticeSuccess(collData) {
  return { type: types.EDIT_NOTICE_SUCCESS, collData };
}
export function editNoticeFailure(collData) {
  return { type: types.EDIT_NOTICE_FAILURE,data: collData };
}
export function editNotice(collData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return CollaborateApi.editNotice(collData).then(data => {
      if (data.status == "SUCCESS")
        dispatch(editNoticeSuccess(data.response));
      else
        dispatch(editNoticeFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function addMessageSuccess(collData, msg) {
  return {
    type: types.ADD_MESSAGE_SUCCESS, collData: {
      msg, collData
    }
  };
}
export function addMessageFailure(collData) {
  return { type: types.ADD_MESSAGE_FAILURE,data: collData };
}
export function addMessage(collData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return CollaborateApi.addMessage(collData).then(data => {
      if (data.status == "SUCCESS")
        //console.log("Mesage sent");
         dispatch(addMessageSuccess(collData, data.response));
      else
        dispatch(addMessageFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function deleteMessageSuccess(collData) {
  return {
    type: types.DELETE_MESSAGE_SUCCESS, collData
  };
}
export function deleteMessageFailure(collData) {
  return { type: types.DELETE_MESSAGE_FAILURE,data: collData   };
}
export function deleteMessage(collData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return CollaborateApi.deleteMessage(collData).then(data => {
      if (data.status == "SUCCESS")
        //console.log("Mesage sent");
         dispatch(deleteMessageSuccess(collData));
      else
        dispatch(deleteMessageFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}


export function closeDiscussionSuccess(collData) {
  return { type: types.CLOSE_DISCUSSION_SUCCESS, collData };
}
export function closeDiscussionFailure(collData) {
  return { type: types.CLOSE_DISCUSSION_FAILURE,data: collData };
}
export function closeDiscussion(collData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return CollaborateApi.closeDiscussion(collData).then(data => {
      if (data.status == "SUCCESS")
        dispatch(closeDiscussionSuccess(collData));
      else
        dispatch(closeDiscussionFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}


export function getNoticesSuccess(collData) {
  return { type: types.GET_NOTICES_SUCCESS, collData };
}
export function getNoticesFailure(data) {
  return { type: types.GET_NOTICES_FAILURE,data: data };
}
export function getNotices(collData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return CollaborateApi.getNotices(collData).then(data => {
      if (data.status == "SUCCESS")
        dispatch(getNoticesSuccess(data.response));
      else
        dispatch(getNoticesFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}


export function getComplaintsSuccess(collData) {
  return { type: types.GET_COMPLAINTS_SUCCESS, collData };
}
export function getComplaintsFailure(data) {
  return { type: types.GET_COMPLAINTS_FAILURE,data: data };
}
export function getComplaints(collData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return CollaborateApi.getComplaints(collData).then(data => {
      if (data.status == "SUCCESS")
        dispatch(getComplaintsSuccess(data.response));
      else
        dispatch(getComplaintsFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);      
    });
  };
}



export function getDiscussionsSuccess(collData) {
  return { type: types.GET_DISCUSSIONS_SUCCESS, collData };
}
export function getDiscussionsFailure(data) {
  return { type: types.GET_DISCUSSIONS_FAILURE,data: data };
}
export function getDiscussions(collData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return CollaborateApi.getDiscussions(collData).then(data => {
      if (data.status == "SUCCESS")
        dispatch(getDiscussionsSuccess(data.response));
      else
        dispatch(getDiscussionsFailure(data.errorDesc));
    }).catch(error => {      
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}