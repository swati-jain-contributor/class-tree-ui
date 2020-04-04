import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function collaborateReducer(state = initialState.collaborate, action) {
  switch (action.type) {
    case types.ADD_DISCUSSION_SUCCESS:
      var obj = Object.assign({}, state);
      if (action.collData.type == "D") {
        var discussions = [...state.discussions, action.collData];
        obj.discussions = discussions;
      }
      else if (action.collData.type == "N") {
        var notices = [...state.notices, action.collData];
        obj.notices = notices;
      }
      else if (action.collData.type == "C") {
        var complaints = [...state.complaints, action.collData];
        obj.complaints = complaints;
      }
      return obj;
    case types.ADD_DISCUSSION_FAILURE:
      return state;
    case types.EDIT_NOTICE_SUCCESS:
      var obj = Object.assign({}, state);
      if (action.collData.type == "N") {
        var notices = [...state.notices.filter(notice => notice._id !== action.collData._id), action.collData];
        obj.notices = notices;
      }
      return obj;
    case types.EDIT_NOTICE_FAILURE:
      return state;
    case types.ADD_MESSAGE_SUCCESS:
      if (action.collData.collData.type == 'D') {
        var s = Object.assign({}, state.discussions.find(dis => dis._id == action.collData.collData.id));
        s.msgs = [...s.msgs, action.collData.msg];
        var discussions = [s, ...state.discussions.filter(dis => dis._id != action.collData.collData.id)];
        var obj = Object.assign({}, state);
        obj.discussions = discussions;
        return obj;
      }
      else if (action.collData.collData.type == 'C') {
        var s = Object.assign({}, state.complaints.find(dis => dis._id == action.collData.collData.id));
        s.msgs = [...s.msgs, action.collData.msg];
        var complaints = [s, ...state.complaints.filter(dis => dis._id != action.collData.collData.id)];
        var obj = Object.assign({}, state);
        obj.complaints = complaints;
        return obj;
      }
      else
        return state;
    case types.ADD_MESSAGE_FAILURE:
      return state;
    case types.CLOSE_DISCUSSION_SUCCESS:
      var obj = Object.assign({}, state);
      if (action.collData.type == "D") {
        var discussions = [
          ...state.discussions.filter(dis => dis._id !== action.collData._id)
        ];
        obj.discussions = discussions;
      }
      else if (action.collData.type == "N") {
        var notices = [
          ...state.notices.filter(dis => dis._id !== action.collData._id)
        ];
        obj.notices = notices;
      }
      else if (action.collData.type == "C") {
        var complaints = [
          ...state.complaints.filter(dis => dis._id !== action.collData._id)
        ];
        obj.complaints = complaints;
      }
      return obj;

    case types.CLOSE_DISCUSSION_FAILURE:
      return state;
    case types.GET_NOTICES_SUCCESS:
      var obj = Object.assign({}, state);
      obj.notices = action.collData;
      console.log(obj);
      return obj;
    case types.GET_NOTICES_FAILURE:
      return state;
    case types.GET_COMPLAINTS_SUCCESS:
      var obj = Object.assign({}, state);
      obj.complaints = action.collData;
      console.log(obj);
      return obj;
    case types.GET_COMPLAINTS_FAILURE:
      return state;
    case types.GET_DISCUSSIONS_SUCCESS:
      var obj = Object.assign({}, state);
      obj.discussions = action.collData;
      console.log(obj);
      return obj;
    case types.GET_DISCUSSIONS_FAILURE:
      return state;
    case types.DELETE_MESSAGE_SUCCESS:
      // if (action.collData.type == 'D') {
      //   var s = Object.assign({}, state.discussions.find(dis => dis._id == action.collData.groupId));
      //   s.msgs = [...s.msgs];
      //   action.collData.ids.map(id => {
      //     var msg = Object.assign({}, s.msgs.find(m => m._id == id));
      //     msg.msg = "This message is deleted by " + JSON.parse(localStorage.getItem("state")).session.name;
      //     msg.status="inactive";
      //     var index = s.msgs.findIndex(m => m._id == id);
      //     s.msgs = [...s.msgs.slice(0, index),
      //       msg,
      //     ...s.msgs.slice(index+1)];
      //   });

      //   var discussions = [s, ...state.discussions.filter(dis => dis._id != action.collData.groupId)];
      //   var obj = Object.assign({}, state);
      //   obj.discussions = discussions;
      //   return obj;
      // }
      if (action.collData.type == 'D' || action.collData.type == 'C') {
        var groups = action.collData.type == 'D' ? state.discussions : state.complaints;
        var s = Object.assign({}, groups.find(dis => dis._id == action.collData.groupId));
        s.msgs = [...s.msgs];
        action.collData.ids.map(id => {
          var msg = Object.assign({}, s.msgs.find(m => m._id == id));
          msg.msg = "This message is deleted by " + JSON.parse(localStorage.getItem("state")).session.name;
          msg.status = "inactive";
          var index = s.msgs.findIndex(m => m._id == id);
          s.msgs = [...s.msgs.slice(0, index),
            msg,
          ...s.msgs.slice(index + 1)];
        });
        var discussions = [s, ...groups.filter(dis => dis._id != action.collData.groupId)];
        var obj = Object.assign({}, state);
        if(action.collData.type=='D')
          obj.discussions = discussions;
        else if(action.collData.type=='C')
          obj.complaints = discussions;
        return obj;
      }
      else
        return state;
    default:
      return state;
  }
}