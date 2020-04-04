import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import session from './loginReducer';
import members from './memberReducer';
import requests from './requestReducer';
import vendors from './vendorReducer';
import accounts from './accountsReducer';
import collaborate from './collaborateReducer';
import classes from './classReducer';

import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  session,
  authors,
  members,
  requests,
  vendors,
  accounts,
  collaborate,
  classes,
  ajaxCallsInProgress
});

export default rootReducer;
