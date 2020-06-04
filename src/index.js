import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import { Router, browserHistory, hashHistory, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import routes from './routes';

import { authenticationSuccess } from './actions/loginActions';
import throttle from 'lodash/throttle';
import './Bethany/assets/vendor/jquery.easing/jquery.easing.min.js';
import './Bethany/assets/vendor/php-email-form/validate.js';
import './Bethany/assets/vendor/counterup/counterup.min.js';
import './Bethany/assets/vendor/isotope-layout/isotope.pkgd.min.js';
import './Bethany/assets/vendor/venobox/venobox.min.js';
// import './Bethany/assets/vendor/owl.carousel/owl.carousel.min.js';
// import './Bethany/assets/vendor/aos/aos.js';
import './Bethany/assets/js/main.js';
import './styles/styles.less';
import 'html2canvas';
// import './styles/login.less';
// import './styles/dashboard.less';

const store = configureStore();
// store.dispatch(loadCourses());
// store.dispatch(loadAuthors());
store.subscribe(throttle(() => {
  const serializedState = JSON.stringify(store.getState());
  localStorage.setItem('state', serializedState);
}, 1000));


$(document).ready(function () {

});
let history;
let app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
if (app) {
  history = useRouterHistory(createHashHistory)({ queryKey: false });
  document.addEventListener('deviceready', startApp, false);
} else {
  history = browserHistory;
  startApp();
}
console.log(history);

function startApp() {
  if (app) {
    document.addEventListener("backbutton", function (e) {
      e.preventDefault();
    }, false);
  }
  render(
    <Provider store={store} >
      <MuiThemeProvider>
        <Router history={history} routes={routes} />
      </MuiThemeProvider>
    </Provider >,
    document.getElementById('app')
  );
}


//   Query for sending email
//Select Name, MeetingLink, Email from Student as S cross join Class as CL on S.ClassId = CL.id
//  where S.ClassId IN (Select id from shareskill.Class C
// where active = 1 and  
// INSERT INTO `shareskill`.`EmailDetails` (`Media`, `Type`, `StudentId`, `ClassId`) VALUES ('Email', 'CLASS_JOINING_DETAILS', '70', '99');
// INSERT INTO `shareskill`.`EmailDetails` (`Media`, `Type`, `StudentId`, `ClassId`) VALUES ('Email', 'CLASS_JOINING_DETAILS', '71', '99');

//   (TIMESTAMPDIFF(HOUR,UTC_TIMESTAMP(),C.date) <6) AND (C.date >UTC_TIMESTAMP())  and MeetingLink is not null);

