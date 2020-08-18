import delay from './delay';
import server from './server';

class SessionApi {
  static createAccount(userdata) {
    return fetch(server + "/api/session/createAccount", {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userdata),
      credentials: 'include'
    }).then(res => res.json()).then(res => {
      return res;
    });
  }
  static login(userdata) {
    return fetch(server + "/api/session/login", {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userdata),
      credentials: 'include'
    }).then(res => res.json()).then(res => {
      return res;
    });
  }


  static logout() {
    return fetch(server + "/api/session/logout", {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(res => res.json()).then(res => {
      return res;
    });
  }
  static getUserData() {
    let userdata = {};
    userdata.timezone = (new Date().getTimezoneOffset()) / 60;
    userdata.registeredon = location.href;
    userdata.referrer = document.referrer;
    userdata.history = history.length;
    userdata.browsername = navigator.appName;
    userdata.browserversion = navigator.userAgent;
    userdata.platform = navigator.platform;
    userdata.language = navigator.language;
    userdata.screenwidth = screen.width;
    userdata.screenheight = screen.height;
    return fetch(server + "/api/session/getUserData", {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userdata),
      credentials: 'include',
    }).then(res => res.json()).then(res => {
      return res;
    });
  }

}

export default SessionApi;
