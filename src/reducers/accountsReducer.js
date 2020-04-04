import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function accountsReducer(state = initialState.accounts, action) {
  switch (action.type) {
    case types.CREATE_MAINTAINENCE_SUCCESS:   
       var obj=Object.assign({}, state);
       obj.maintainenceFunds= [...state.maintainenceFunds,action.maintainData];
       obj.pendingMaintainence= [...state.pendingMaintainence,action.maintainData];
      // obj.maintainenceFunds.push(action.maintainData); 
      // obj.pendingMaintainence.push(action.maintainData);  
      return obj;     
    case types.CREATE_MAINTAINENCE_FAILURE:
      return state;
    case types.GET_ALL_MAINTAINENCE_SUCCESS:
      var obj=Object.assign({}, state);
      obj.maintainenceFunds=action.maintainData;
      return obj;
    case types.GET_ALL_MAINTAINENCE_FAILURE:      
      return state;
    case types.PAY_MAINTAINENCE_SUCCESS:
      var obj=Object.assign({}, state);  
      //return obj;
      if(action.maintainData.ids.length==1 && action.maintainData.isCash)
        return obj;
      else
        obj.pendingMaintainence=[...state.pendingMaintainence].filter(p=> !action.maintainData.ids.includes(p._id));
      return obj;
    case types.PAY_MAINTAINENCE_FAILURE:
      return state;
    case types.BLOCK_MAINTAINENCE_SUCCESS:
      return state;
    case types.BLOCK_MAINTAINENCE_FAILURE:
      return state;
    case types.ADD_EXPENSE_SUCCESS:
        return state;      
    case types.ADD_EXPENSE_FAILURE:
      return state;
    case types.GET_MEMBER_STMT_SUCCESS:
      var obj=Object.assign({}, state);
      obj.memberDetails=action.maintainData;
      return obj;
    case types.GET_MEMBER_STMT_FAILURE:
      return state;
    case types.GET_SOCIETY_FUNDS_SUCCESS:
      var obj=Object.assign({}, state);
      obj.aptFunds=action.maintainData;
      return obj;
    case types.GET_SOCIETY_FUNDS_FAILURE:
      return state;
    case types.GET_MAINTAINENCE_DETAILS_SUCCESS:
      var obj=Object.assign({}, state);
      obj.maintainenceDetails=action.maintainData;
      return obj;
    case types.GET_MAINTAINENCE_DETAILS_FAILURE:
      return state;
    case types.GET_PENDING_MAINTAINENCE_SUCCESS:
      var obj=Object.assign({}, state);
      obj.pendingMaintainence=action.maintainData;
      return obj; 
    case types.GET_PENDING_MAINTAINENCE_FAILURE:
      return state;
    default:
      return state;
  }
}