import ClassApi from '../api/classApi';
import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import { resetErrorMessage } from './loginActions';

export function addClassSuccess(collData) {
  return { type: types.ADD_CLASSES_SUCCESS, collData };
}
export function addClassFailure(data) {
  return { type: types.ADD_CLASSES_FAILURE, data: data };
}
export function addClass(collData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return ClassApi.addClass(collData).then(data => {
      if (data.status == "SUCCESS")
        dispatch(addClassSuccess(data.response));
      else
        dispatch(addClassFailure(data.errorDesc));
      dispatch(getClasses({
        email: collData.email,
        type: 'T'
      }));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}


export function bookClassSuccess(collData) {
  return { type: types.BOOK_CLASSES_SUCCESS, collData };
}
export function bookClassFailure(data) {
  return { type: types.BOOK_CLASSES_FAILURE, data: data };
}
export function bookClass(collData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return ClassApi.bookClass(collData).then(data => {
      if (data.status == "SUCCESS")
        dispatch(bookClassSuccess(data.response));
      else
        dispatch(bookClassFailure(data.errorDesc));
      dispatch(getClasses({
        email: collData.email,
        type: 'C'
      }));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}


export function addStudentData(collData) {
  return { type: types.ADD_STUDENT_DATA, collData };
}

export function addTeacherData(collData) {
  return { type: types.ADD_TEACHER_EMAIL, collData };
}

export function getClassTeacherSuccess(collData) {
  return { type: types.GET_CLASSES_SUCCESS, collData };
}
export function getClassStudentSuccess(collData) {
  return { type: types.GET_STUDENT_CLASSES_SUCCESS, collData };
}
export function getClassFailure(data) {
  return { type: types.GET_CLASSES_FAILURE, data: data };
}
export function getClasses(collData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return ClassApi.getClasses(collData).then(data => {
      if (data.status == "SUCCESS") {
        data.response.type = collData.type;
        if (collData.type == 'T' || collData.type == 'R')
          dispatch(getClassTeacherSuccess(data.response));
        else
          dispatch(getClassStudentSuccess(data.response));
      }
      else
        dispatch(getClassFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
