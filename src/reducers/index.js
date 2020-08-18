import {combineReducers} from 'redux';

import classes from './classReducer';
import session from './sessionReducer';

import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  classes,
  session,
  ajaxCallsInProgress
});

export default rootReducer;
