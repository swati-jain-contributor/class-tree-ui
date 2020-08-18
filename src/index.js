import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import { Router, browserHistory, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import routes from './routes';
import throttle from 'lodash/throttle';
import './Bethany/assets/vendor/jquery.easing/jquery.easing.min.js';
import './Bethany/assets/vendor/php-email-form/validate.js';
import './Bethany/assets/vendor/counterup/counterup.min.js';
import './Bethany/assets/vendor/isotope-layout/isotope.pkgd.min.js';
import './Bethany/assets/vendor/venobox/venobox.min.js';
import './Bethany/assets/js/main.js';
import './styles/styles.less';


const store = configureStore();
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
