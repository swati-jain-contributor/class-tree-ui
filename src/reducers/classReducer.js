import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function classReducer(state = initialState.classes, action) {
  switch (action.type) {
    case types.CLASS_DETAIL_SUCCESS:
      {
        let obj = Object.assign({}, state);
        obj.selectedClass = action.details;
        return obj;
      }
    case types.CLASS_DETAIL_FAILURE:
      return state;
    case types.ADD_CLASSES_SUCCESS:
      {
        let obj = Object.assign({}, state);
        return obj;
      }
    case types.ADD_CLASSES_FAILURE:
      return state;
    case types.GET_CLASSES_SUCCESS:
      {
        let obj = Object.assign({}, state);
        obj.TeacherClasses = action.collData;
        if (action.collData.type == "T") 
          obj.offeredClasses = action.collData;
        else if (action.collData.type == "R") 
          obj.registeredClasses = action.collData;
        else if (action.collData.type == "C") 
            obj.allClasses = action.collData;
        return obj;
      }
    case types.GET_STUDENT_CLASSES_SUCCESS:
      {
        let obj = Object.assign({}, state);
        obj.AllClasses = action.collData;
        return obj;
      }
    case types.GET_CLASSES_FAILURE:
      return state;
    default:
      return state;
  }
}
