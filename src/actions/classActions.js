import ClassApi from '../api/classApi';
import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

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
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function getClassDetailsSuccess(details) {
  return { type: types.CLASS_DETAIL_SUCCESS, details };
}
export function getClassDetailsFailure(data) {
  return { type: types.CLASS_DETAIL_FAILURE, data: data };
}
export function getClassDetails(id){
  return dispatch => {
    dispatch(beginAjaxCall());
    return ClassApi.getClassDetails(id).then(data => {
      if (data.status == "SUCCESS") {
          dispatch(getClassDetailsSuccess(data.response));
      }
      else
        dispatch(getClassDetailsFailure(data.errorDesc));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}
