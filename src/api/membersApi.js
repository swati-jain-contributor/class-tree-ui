import delay from './delay';
import server from './server';
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
class MembersApi {
  static getAllMembers() {
    return fetch(server + "/api/members/getallmembers",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token': localStorage.token
        },
        credentials: 'include',
        method: "GET"
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
      })
  }
  static getAllRequests() {
    return fetch(server + "/api/members/getallrequests",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token': localStorage.token
        },
        credentials: 'include',
        method: "GET"
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
      })
  }
  static addMember(member) {
    return fetch(server + '/api/members/addMember', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth-token': localStorage.token
      },
      credentials: 'include',
      body: JSON.stringify({
        "name": member.name,
        "family": member.family,
        "phone": member.phone,
        "flat": member.flat,
        "block": member.block,
        "vehicles": []
      })
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
  static updateRequest(request) {
    return fetch(server + '/api/members/updateRequest', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth-token': localStorage.token
      },
      credentials: 'include',
      body: JSON.stringify({
        "type": request.type,
        "requestId": request.requestId
      })
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
  static editMember(member) {
    //
    return fetch(server + "/api/members/editMember",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token': localStorage.token
        },
        credentials: 'include',
        method: "POST",
        body: JSON.stringify({
          "id": member._id,
          "name": member.name,
          "family": member.family,
          "phone": member.phone,
          "flat": member.flat,
          "block": member.block,
          "role":member.role,
          "vehicles": []
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
      })
  }
  static deleteMember(id) {
    return fetch(server + "/api/members/deleteMember",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token': localStorage.token
        },
        credentials: 'include',
        method: "POST",
        body: JSON.stringify({
          "id": id
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
      })
  }
  static ringAlarm() {
    return fetch(server + "/api/members/alarm",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token': localStorage.token
        },
        credentials: 'include',
        method: "POST",
        body: JSON.stringify({
          "type":"EMERGENCY",
          "id":JSON.parse(localStorage.getItem("state")).session.memberid
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
      })
  }
}

export default MembersApi;