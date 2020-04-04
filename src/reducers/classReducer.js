import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function classReducer(state = initialState.classes, action) {
  switch (action.type) {
    case types.ADD_TEACHER_EMAIL:
      {let obj = Object.assign({}, state);
      obj.teacherEmail = action.collData.email;
      obj.teacherPhone = action.collData.phoneNo;
      obj.teacherName = action.collData.name;
      return obj;}
    case types.ADD_STUDENT_DATA:
      {let obj = Object.assign({}, state);
      obj.studentEmail = action.collData.email;
      obj.studentPhone = action.collData.phoneNo;
      obj.studentName = action.collData.name;
      return obj;}
    case types.ADD_CLASSES_SUCCESS:
      {let obj = Object.assign({}, state);
      return obj;}
    case types.ADD_CLASSES_FAILURE:
      return state;
    case types.GET_CLASSES_SUCCESS:
      {let obj = Object.assign({}, state);
      obj.TeacherClasses = action.collData;
      if(obj.TeacherClasses.length>0){
        obj.teacherName=obj.TeacherClasses[0].TutorName;
        obj.teacherPhone=obj.TeacherClasses[0].PhoneNo;
      }
        
      return obj;}
    case types.GET_STUDENT_CLASSES_SUCCESS: 
      {let obj = Object.assign({}, state);
      obj.AllClasses = action.collData;
      if(obj.AllClasses.length>0 && obj.AllClasses.find(s=>s.StudentName)){
        var cs = obj.AllClasses.find(s=>s.StudentName);
        obj.studentName=cs.StudentName;
        obj.studentPhone=cs.StudentPhone;
      }
      return obj;
    }
    case types.GET_CLASSES_FAILURE:
      return state;
    default:
      return state;
  }
}
