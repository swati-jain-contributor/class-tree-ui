import AccountsApi from '../api/accountsApi';
import * as types from './actionTypes';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';
import { resetErrorMessage } from './loginActions';

export function createMaintainenceSuccess(maintainData) {
  return { type: types.CREATE_MAINTAINENCE_SUCCESS, maintainData };
}
export function createMaintainenceFailure(maintainData) {
  return { type: types.CREATE_MAINTAINENCE_FAILURE, data: maintainData };
}
export function createMaintainence(maintainData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AccountsApi.createMaintainence(maintainData).then(data => {
      if (data.status == "SUCCESS")
        dispatch(createMaintainenceSuccess(data.response));
      else
        dispatch(createMaintainenceFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function getAllMaintainenceSuccess(maintainData) {
  return { type: types.GET_ALL_MAINTAINENCE_SUCCESS, maintainData };
}
export function getAllMaintainenceFailure(maintainData) {
  return { type: types.GET_ALL_MAINTAINENCE_FAILURE, data: maintainData };
}
export function getAllMaintainence() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AccountsApi.getAllMaintainence().then(data => {
      if (data.status == "SUCCESS")
        dispatch(getAllMaintainenceSuccess(data.response));
      else
        dispatch(getAllMaintainenceFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function payMaintainenceSuccess(maintainData) {
  return { type: types.PAY_MAINTAINENCE_SUCCESS, maintainData };
}
export function payMaintainenceFailure(maintainData) {
  return { type: types.PAY_MAINTAINENCE_FAILURE, data: maintainData };
}
export function payMaintainence(maintainData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AccountsApi.payMaintainence(maintainData).then(data => {
      if (data.status == "SUCCESS")
        dispatch(payMaintainenceSuccess(maintainData));
      else
        dispatch(payMaintainenceFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}


export function blockMaintainenceSuccess(maintainData) {
  return { type: types.BLOCK_MAINTAINENCE_SUCCESS, maintainData };
}
export function blockMaintainenceFailure(maintainData) {
  return { type: types.BLOCK_MAINTAINENCE_FAILURE, data: maintainData };
}
export function blockMaintainence(maintainData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AccountsApi.blockMaintainence(maintainData).then(data => {
      if (data.status == "SUCCESS")
        dispatch(blockMaintainenceSuccess(maintainData));
      else
        dispatch(blockMaintainenceFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}

export function addExpenseSuccess(maintainData) {
  return { type: types.ADD_EXPENSE_SUCCESS, maintainData };
}
export function addExpenseFailure(maintainData) {
  return { type: types.ADD_EXPENSE_FAILURE, data: maintainData };
}
export function addExpense(maintainData) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(beginAjaxCall());
      return AccountsApi.addExpense(maintainData).then(data => {
        resolve(data);
        if (data.status == "SUCCESS")
          dispatch(addExpenseSuccess(data.response));
        else
          dispatch(addExpenseFailure(data.errorDesc));
      }).catch(error => {
        reject(error);
        dispatch(resetErrorMessage("Please check your internet connection"));
        dispatch(ajaxCallError(error));
        throw (error);
      });
    })
  };
  // return dispatch => {
  //   dispatch(beginAjaxCall());
  //   return AccountsApi.addExpense(maintainData).then(data => {
  //     if (data.status == "SUCCESS")
  //       dispatch(addExpenseSuccess(data.response));
  //     else
  //       dispatch(addExpenseFailure(data.errorDesc));
  //   }).catch(error => {
  //     dispatch(resetErrorMessage("Please check your internet connection"));
  //     dispatch(ajaxCallError(error));
  //     throw (error);
  //   });
  // };
}


export function getMemberStmtSuccess(maintainData) {
  return { type: types.GET_MEMBER_STMT_SUCCESS, maintainData };
}
export function getMemberStmtFailure(data) {
  return { type: types.GET_MEMBER_STMT_FAILURE, data: data };
}
export function getMemberStmt(maintainData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AccountsApi.getMemberStmt(maintainData).then(data => {
      if (data.status == "SUCCESS")
        dispatch(getMemberStmtSuccess(data.response));
      else
        dispatch(getMemberStmtFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}


export function getSocietyFundsSuccess(maintainData) {
  return { type: types.GET_SOCIETY_FUNDS_SUCCESS, maintainData };
}
export function getSocietyFundsFailure(data) {
  return { type: types.GET_SOCIETY_FUNDS_FAILURE, data: data };
}
export function getSocietyFunds(maintainData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AccountsApi.getSocietyFunds(maintainData).then(data => {
      if (data.status == "SUCCESS")
        dispatch(getSocietyFundsSuccess(data.response));
      else
        dispatch(getSocietyFundsFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}



export function getMaintainenceDetailsSuccess(maintainData) {
  return { type: types.GET_MAINTAINENCE_DETAILS_SUCCESS, maintainData };
}
export function getMaintainenceDetailsFailure(data) {
  return { type: types.GET_MAINTAINENCE_DETAILS_FAILURE, data: data };
}
export function getMaintainenceDetails(maintainData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AccountsApi.getMaintainenceDetails(maintainData).then(data => {
      if (data.status == "SUCCESS")
        dispatch(getMaintainenceDetailsSuccess(data.response));
      else
        dispatch(getMaintainenceDetailsFailure(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}



export function getPendingMaintainenceSuccess(maintainData) {
  return { type: types.GET_PENDING_MAINTAINENCE_SUCCESS, maintainData };
}
export function getPendingMaintainenceFailure(data) {
  return { type: types.GET_PENDING_MAINTAINENCE_FAILURE, data: data };
}
export function getPendingMaintainence(maintainData) {
  return dispatch => {
    dispatch(beginAjaxCall());
    return AccountsApi.getPendingMaintainence(maintainData).then(data => {
      if (data.status == "SUCCESS")
        dispatch(getPendingMaintainenceSuccess(data.response));
      else
        dispatch(getPendingMaintainenceSuccess(data.errorDesc));
    }).catch(error => {
      dispatch(resetErrorMessage("Please check your internet connection"));
      dispatch(ajaxCallError(error));
      throw (error);
    });
  };
}