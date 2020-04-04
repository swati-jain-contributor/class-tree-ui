import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import { Router, browserHistory, hashHistory, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import routes from './routes';
// import { loadCourses } from './actions/courseActions';
// import { loadAuthors } from './actions/authorActions';
import { getAllMembers, getAllRequests } from './actions/memberActions';
import { addMessageSuccess } from './actions/collaborateActions';
import { authenticationSuccess } from './actions/loginActions';
import throttle from 'lodash/throttle';

import $ from 'jquery';
import 'bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './styles/styles.less';
import './styles/login.less';
import './styles/dashboard.less';

const store = configureStore();
// store.dispatch(loadCourses());
// store.dispatch(loadAuthors());
store.subscribe(throttle(() => {
  const serializedState = JSON.stringify(store.getState());
  localStorage.setItem('state', serializedState);
}, 1000));


$(document).ready(function () {

});
var history;
var app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
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
    window.ga.startTrackerWithId('UA-104993352-1', 30);
    window.raiseAnalyticsEvent = function (type) {
      window.ga.addCustomDimension(1, (new Date()).getTime());
      var session=JSON.parse(localStorage.getItem("state")).session;
      var token=localStorage.getItem("token");
      window.ga.trackEvent(token, session.aptId+"-"+session.userId, type);
    };
    //cordova.plugins.autoStart.enable();
    document.addEventListener("backbutton", function (e) {
      e.preventDefault();
    }, false);
    window.FirebasePlugin.getToken(function (token) {
      console.log(token);
    }, function (error) {
      console.error(error);
    });
    window.FirebasePlugin.onTokenRefresh(function (token) {
      console.log(token);
    }, function (error) {
      console.error(error);

    });
    window.FirebasePlugin.onNotificationOpen(function (notification) {
      notification.message = JSON.parse(notification.message);
      console.log(notification.event);
      if (notification.event == "NEW_MESSAGE") {
        store.dispatch(addMessageSuccess(notification.message.discussion, notification.message.msg));
      }
      else if (notification.event == "REQUEST_APPROVED") {
        store.dispatch(authenticationSuccess(notification.message));
      }
      else if (notification.event == "REQUEST_JOIN_APT") {
        store.dispatch(getAllRequests());
      }
      else if (notification.event == "EMERGENCY_ALARM") {
        var evt = new CustomEvent(notification.event, { detail: notification.message });
        document.dispatchEvent(evt);
        return;
      }
      if (notification.tap) {
        var evt = new CustomEvent(notification.event, { detail: notification.message });
        document.dispatchEvent(evt);
      }
    }, function (error) {
      console.error(error);
    });
  }
  else {
    window.raiseAnalyticsEvent = function (type) {
    };
    // const messaging = firebase.messaging();
    // messaging.getToken()
    //   .then(function (currentToken) {
    //     console.log(currentToken);
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });
    // messaging.onTokenRefresh(function () {
    //   messaging.getToken()
    //     .then(function (refreshedToken) {
    //       console.log(refreshedToken);
    //     })
    //     .catch(function (err) {
    //       console.log('Unable to retrieve refreshed token ', err);
    //     });
    // });
    // messaging.requestPermission()
    //   .then(function () {
    //     console.log('Notification permission granted.');        
    //   })
    //   .catch(function (err) {
    //     console.log('Unable to get permission to notify.', err);
    //   });
    // messaging.onMessage(function (payload) {
    //   console.log("Message received. ", payload);
    // })
    // }
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
