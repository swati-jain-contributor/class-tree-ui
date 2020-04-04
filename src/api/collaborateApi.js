import delay from './delay';
import server from './server';

class CollaborateApi {
  static addDiscussion(collData) {
    return fetch(server+"/api/discussions/adddiscussion",
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token':localStorage.token  
        },
        credentials: 'include',
        body: JSON.stringify({
          title: collData.title,
          type: collData.type,
          msg: collData.msg
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
        throw(res);
      });
  }
  static editNotice(collData){
    return fetch(server+"/api/discussions/editnotice",
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token':localStorage.token  
        },
        credentials: 'include',
        body: JSON.stringify({
          type: collData.type,
          id: collData._id,
          title: collData.title,
          msg: collData.msg,
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
        throw(res);
      });
  }
  static deleteMessage(data){
    return fetch(server+"/api/discussions/deletemessage",
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token':localStorage.token  
        },
        credentials: 'include',
        body: JSON.stringify({
          msgIds: data.ids
        })
      })
      .then((resp) => resp.json())
      .then(function (res) {
        console.log(res);
        return res;
      })
      .catch(function (res) {
        console.log(res);        
        throw(res);
      });
  }
  static addMessage(collData){
    return fetch(server+"/api/discussions/addmessage",
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token':localStorage.token  
        },
        credentials: 'include',
        body: JSON.stringify({
          id: collData.id,
          msg: collData.msg,
          type:collData.type
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
        throw(res);
      });
  }
  static closeDiscussion(collData){
    console.log(collData);
    return fetch(server+"/api/discussions/closediscussion",
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token':localStorage.token  
        },
        credentials: 'include',
        body: JSON.stringify({
          id: collData._id,
          type:collData.type
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
        throw(res);
      });
  }
  static getNotices(collData){
    return fetch(server+"/api/discussions/getnotices",
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token':localStorage.token  
        },
        credentials: 'include',
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
       // return res;
       throw(res);
      });
  }
  static getComplaints(collData){
    return fetch(server+"/api/discussions/getcomplaints",
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token':localStorage.token  
        },
        credentials: 'include',
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
        throw(res);
      });
  }
  static getDiscussions(collData){
    return fetch(server+"/api/discussions/getdiscussions",
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth-token':localStorage.token  
        },
        credentials: 'include',
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
        throw(res);
      });
  }
  
}

export default CollaborateApi;