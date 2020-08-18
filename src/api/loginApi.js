
import server from './server';

class LoginApi {
  static createSession() {
    return fetch(server + '/api/sessions/createSession', {
      method: 'get',
      mode: 'cors'
      // credentials: 'credentials'
    })
      .then((resp) => resp.json())
      .then(function (res) {
        console.log(res);
        return res;
      }).catch(function (res) {
        console.log(res);
        //return res;
        throw (res);
      });
  }
  static login(loginData) {
    //
    return fetch(server + "/api/apartments/login",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token': localStorage.token
        },
        credentials: 'include',
        method: "POST",
        body: JSON.stringify({
          "username": loginData.username,
          "otp": loginData.otp,
          "type": loginData.type,
          "requestId": loginData.requestId
        })
      })
      .then((resp) => resp.json())
      .then(function (res) {
        console.log(res);
        return res;
      })
      .catch(function (res) {
        console.log(res);
        //return res;
        throw (res);
      });
  }
  static sendOTP(reqData) {
    //
    return fetch(server + "/api/apartments/sendOTP",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token': localStorage.token
        },
        credentials: 'include',
        method: "POST",
        body: JSON.stringify({
          "type": reqData.type,
          "username": reqData.username,
          "requestId": reqData.requestId
        })
      })
      .then((resp) => resp.json())
      .then(function (res) {
       // alert(res.response);
        console.log(res);
        return res;
      })
      .catch(function (res) {
        console.log(res);
        //return res;
        throw (res);
      });
  }

  static getUserData() {
    return fetch(server + "/api/sessions/getuserdata",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token': localStorage.token
        },
        // credentials: 'include',
        method: "POST",
        body: JSON.stringify({
        })
      })
      .then((resp) => resp.json())
      .then(function (res) {
        console.log(res);
        return res;
      })
      .catch(function (res) {
        console.log(res);
        //return res;
        throw (res);
      });
  }
}

export default LoginApi;
