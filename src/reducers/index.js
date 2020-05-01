import {combineReducers} from 'redux';

import requests from './requestReducer';
import classes from './classReducer';

import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  requests,
  classes,
  ajaxCallsInProgress
});

export default rootReducer;
